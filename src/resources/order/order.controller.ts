import { Request, Response } from "express";
import { IUser } from "src/lib";
import { createOrder, CreateOrderInput, getOrders, GetOrdersInput } from ".";
import { createCustomer, shipmentItemValidation } from "..";

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
      createdBy: req.body.createdBy ?? user._id,
    });

    //create customer who ordered the item
    const customer = await createCustomer({
      name: order.name,
      phone: order.phone,
      address: order.address,
    });

    //check if available and subtract item from the shipment items
    const price = await shipmentItemValidation(
      order.amount,
      order.shipmentItem,
      order.discount
    );
    if (!price) throw new Error("Error, please try again later..");
    // generate total price and subtract discount if there is any
    order.genDiscountAndTotalPrice(price);
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
      },
      req.params.select
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
