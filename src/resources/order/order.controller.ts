import { Request, Response } from "express";
import { IUser } from "src/lib";
import { createOrder, CreateOrderInput } from ".";
import { createCustomer, shipmentItemValidation } from "..";

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
