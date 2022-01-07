import { DocumentDefinition, QueryOptions } from "mongoose";
import { IOrder } from "src/lib";
import { OrderModel } from ".";

export const createOrder = (
  input: DocumentDefinition<
    Omit<IOrder, "createdAt" | "updatedAt" | "genDiscountAndTotalPrice">
  >
) => {
  const order = new OrderModel(input);
  return order;
};


export const getOrders = (
  options: QueryOptions = { lean: true },
  select?: string,
  search?: string
) => {
  return OrderModel.find(search ? { name: { $regex: '.*' + search + '.*' } } : {}, {}, options)
    .populate({
      path: "items",
      populate: {
        path: "shipmentItem",
        select: "name type left price"
      }
    })
    .select(select).exec();
};

export const mark_as_delivered = (id: DocumentDefinition<IOrder>["_id"]) => {
  OrderModel.findOne({ _id: id }, async function (_: Error, order: IOrder) {
    order.items[0].isDelivered = true;
    await order.save();
  })
}