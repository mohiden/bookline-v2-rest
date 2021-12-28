import mongoose from "mongoose";
import { IShipment, IShipmentBooks } from "../../lib";

const COLLECTION_NAME = "Shipment";

const booksSchema = new mongoose.Schema<IShipmentBooks>({
  book: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Book" },
  amount: { type: mongoose.Schema.Types.Number, required: true },
});

const schema = new mongoose.Schema<IShipment>(
  {
    month: { type: mongoose.Schema.Types.String, required: true },
    year: { type: mongoose.Schema.Types.String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    books: { type: [booksSchema], default: [] },
    totalBooks: { type: mongoose.Schema.Types.Number, default: 0 },
  },
  { timestamps: true }
);

//create books counting based on user entry.
schema.pre<IShipment>("save", async function () {
  if (this.isModified("books")) {
    const count = this.books.length;
    this.totalBooks = count;
  }
});

export const ShipmentModel = mongoose.model<IShipment>(
  "Shipment",
  schema,
  COLLECTION_NAME
);
