import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { IOrder, IOrderBooks } from "../../lib";

const COLLECTION_NAME = "orders";

const orderBooksSchema = new mongoose.Schema<IOrderBooks>({
  book: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Book" },
  amount: { type: mongoose.Schema.Types.Number, required: true },
  price: { type: mongoose.Schema.Types.Number, required: true },
});

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
    area: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    phone: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    books: { type: [orderBooksSchema], default: [] },

    isSold: {
      type: mongoose.Schema.Types.Boolean,
      required: true,
      default: false,
    },
    orderId: {
      type: mongoose.Schema.Types.String,
      required: true,
      default: () => `order_${nanoid()}`,
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model<IOrder>(
  "Order",
  schema,
  COLLECTION_NAME
);
