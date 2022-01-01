import mongoose from "mongoose";
import { IShipmentItem } from "../../lib";

const COLLECTION_NAME = "shipmentItems";

const schema = new mongoose.Schema<IShipmentItem>(
  {
    name: { type: mongoose.Schema.Types.String, required: true },
    type: {
      type: mongoose.Schema.Types.String,
      required: true,
      enum: ["BOOK", "OTHER"],
    },
    amount: { type: mongoose.Schema.Types.Number, required: true },
    left: { type: mongoose.Schema.Types.Number, default: 0 },
    price: { type: mongoose.Schema.Types.Number, required: true },
    totalPrice: { type: mongoose.Schema.Types.Number, default: 0 },
    shipment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Shipment",
    },
  },
  { timestamps: true }
);

//on save set the total price
schema.pre<IShipmentItem>("save", function () {
  if (
    this.isModified("price") &&
    this.isModified("amount") &&
    !this.isModified("totalPrice")
  ) {
    this.left = this.amount;
    this.totalPrice = this.amount * this.price;
  }
});

//check if amount is not empty
schema.methods.checkAmount = function (amount: number) {
  return amount <= this.amount && this.left > 0 && amount <= this.left;
};

//check if discount is not greater than item price
schema.methods.checkDiscount = function (discount: number) {
  return this.price > discount;
};
export const shipmentItemModel = mongoose.model<IShipmentItem>(
  "ShipmentItem",
  schema,
  COLLECTION_NAME
);
