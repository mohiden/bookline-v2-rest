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
  select?: string
) => {
  return OrderModel.find({}, {}, options).select(select);
};