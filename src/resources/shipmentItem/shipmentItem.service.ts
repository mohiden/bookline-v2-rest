import { DocumentDefinition, QueryOptions } from "mongoose";
import { IShipmentItem } from "src/lib";
import { shipmentItemModel } from ".";

export const createShipmentItem = (
  input: DocumentDefinition<
    Omit<
      IShipmentItem,
      "updatedAt" | "createdAt" | "checkAmount" | "checkDiscount" | "left"
    >
  >
) => {
  return shipmentItemModel.create(input);
};

export const getShipmentItems = (
  options: QueryOptions = { lean: true, skip: 0, limit: 0 },
  select?: string
) => {
  return shipmentItemModel
    .find({}, {}, options)
    .populate("shipment")
    .select(select);
};

export const shipmentItemValidation = async (
  amount: number,
  shipmentItemId: IShipmentItem["_id"],
  discount: number = 0
) => {
  const item = await shipmentItemModel.findOne({ _id: shipmentItemId });
  if (!item) throw new Error("shipment item was not found!");
  const isDiscountValid = item.checkDiscount(discount);
  if (!isDiscountValid)
    throw new Error("Discount must be less than item price");
  const isAmount = item.checkAmount(amount);
  if (!isAmount) throw new Error("The requested amount  is not available");
  //subtract requested amount from actual amount
  item.left = item.left - amount;
  await item.save();
  return item.price;
};
