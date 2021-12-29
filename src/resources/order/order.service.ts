import { DocumentDefinition } from "mongoose";
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
