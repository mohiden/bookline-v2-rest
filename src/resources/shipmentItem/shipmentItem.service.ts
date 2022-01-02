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
  let error: string = '';

  const item = await shipmentItemModel.findOne({ _id: shipmentItemId });
  if (!item) {
    // errors.push("shipment item was not found!");
    error = "shipment item was not found!";
    return error;
  }

  const isDiscountValid = item.checkDiscount(discount);
  if (!isDiscountValid) {
    error = item.name + ":Discount must be less than item price";
    return error;
  }

  const isAmount = item.checkAmount(amount);
  if (!isAmount) {
    error = item.name + ":The requested amount is not available";
    return error;
  }

  return;
};
