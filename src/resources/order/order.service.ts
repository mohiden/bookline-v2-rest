import { DocumentDefinition, QueryOptions } from "mongoose";
import { IItem, IOrder } from "src/lib";
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

export const mark_as_delivered = (orderId: DocumentDefinition<IOrder>["_id"], itemId: DocumentDefinition<IItem>["_id"]) => {

  OrderModel.findOne({ _id: orderId }, async function (_: Error, order: IOrder) {
    order.items.map(item => {
      if (item._id?.toString() === itemId?.toString()) {
        console.log(item);
        item.isDelivered = true;
      }
    })
    await order.save();
  })
}