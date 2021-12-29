import mongoose from "mongoose";
import { IOrder } from "../../lib";

const COLLECTION_NAME = "orders";

const schema = new mongoose.Schema<IOrder>(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    phone: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    isDelivered: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    shipmentItem: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ShipmentItem",
    },
    discount: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    totalPrice: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    amount: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
  },
  { timestamps: true }
);

//generate the totalPrice and discount the discount amount from the totalPrice
schema.methods.genDiscountAndTotalPrice = function (price: number) {
  this.totalPrice = this.amount * price;
  this.totalPrice =
    this.discount > 0 ? this.totalPrice - this.discount : this.totalPrice;
};
export const OrderModel = mongoose.model<IOrder>(
  "Order",
  schema,
  COLLECTION_NAME
);
