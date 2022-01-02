import mongoose from "mongoose";
import { shipmentItemModel } from "..";
import { IItem, IOrder } from "../../lib";

const COLLECTION_NAME = "orders";

const itemSchema = new mongoose.Schema<IItem>({
  shipmentItem: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ShipmentItem"
  },
  isDelivered: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  discount: {
    type: mongoose.Schema.Types.Number,
    default: 0,
  },
  amount: {
    type: mongoose.Schema.Types.Number,
    default: 0,
  },
})

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
    items: {
      type: [itemSchema],
      required: true,
      default: [],
    },
    totalPrice: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
  },
  { timestamps: true }
);

//generate the totalPrice and discount the discount amount from the totalPrice
schema.methods.genDiscountAndTotalPrice = async function (shipmentItemId: string) {
  const shipmentItem = await shipmentItemModel.findOne({ _id: shipmentItemId });
  if (!shipmentItem) throw new Error('Shipment item was not found!!!')
  const itemAmount = this.items.find(item => item.shipmentItem.toString() === shipmentItemId.toString())?.amount;
  if (!itemAmount) return console.log("item amount not found");
  this.totalPrice = this.totalPrice! + itemAmount * shipmentItem.price;
}

export const OrderModel = mongoose.model<IOrder>(
  "Order",
  schema,
  COLLECTION_NAME
);
