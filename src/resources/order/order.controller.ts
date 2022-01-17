import { Request, Response } from "express";
import { IUser } from "src/lib";
import { createOrder, CreateOrderInput, getOrders, GetOrdersInput, MarkAsDeliveredInput, mark_as_delivered } from ".";
import { createCustomer, shipmentItemModel, shipmentItemValidation } from "..";

//create
export const createOrderHandler = async (
  req: Request<{}, {}, CreateOrderInput["body"]>,
  res: Response
) => {
  try {
    const user = res.locals.user as IUser;
    //create item order
    const order = createOrder({
      ...req.body,
      createdBy: user["_id"]
    });

    //validate id shipment items id are valid
    //validate if discount is valid
    //validate if amount is available
    const errors = await Promise.all(order.items.map(async (item) => {
      return await shipmentItemValidation(item.amount, item.shipmentItem, item.discount);
    }));

    if (errors.filter(Boolean).length > 0) {
      console.log(errors);
      throw new Error(errors.toString());
    }

    //subtract item left amount from the requested amount
    await Promise.all(order.items.map(async (item) => {
      const shipmentItem = await shipmentItemModel.findOne({ _id: item.shipmentItem });
      if (shipmentItem) {
        shipmentItem.left = shipmentItem.left - item.amount;
        order.genDiscountAndTotalPrice(shipmentItem._id, item.discount);
        return await shipmentItem.save();
      }
      return null;
    }));

    //create customer who ordered the item
    const customer = await createCustomer({
      name: order.name,
      phone: order.phone,
      address: order.address,
    });


    await order.save();
    return res.send({ order, customerCreated: customer });

  } catch (e) {
    console.log("KHALAD:", e);
    return res.status(400).send(e.message || "Error, please try again later");
  }
};


//get all
export const getOrdersHandler = async (
  req: Request<
    GetOrdersInput["params"],
    {},
    {},
    GetOrdersInput["query"] & qs.ParsedQs
  >,
  res: Response
) => {
  try {
    const books = await getOrders(
      {
        limit: Number(req.query.size),
        skip: Number(req.query.page),
        sort: {
          'createdAt': "desc",
        },
      },
      req.params.select,
      req.query.search
    );
    return res.send(books);
  } catch (e) {
    console.log(e);
    //error if page number is negative = -1 ..etc
    if (e && e.code && e.code === 51024) {
      return res.status(400).send("page number must be 0 or greater");
    }
    return res.status(400).send((e.message && e.message) || e.toString());
  }
};

//statics mark as delivered
export const mark_as_delivered_handler = async (req: Request<MarkAsDeliveredInput["params"]>, res: Response) => {
  try {
    mark_as_delivered(req.params.orderId, req.params.itemId);
    return res.send(true);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
}