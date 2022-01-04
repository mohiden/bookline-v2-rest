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