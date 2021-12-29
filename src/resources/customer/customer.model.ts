import mongoose from "mongoose";
import { ICustomer } from "src/lib";

const COLLECTION_NAME = "customers";
const schema = new mongoose.Schema<ICustomer>({
  name: { type: mongoose.Schema.Types.String, required: true },
  phone: { type: mongoose.Schema.Types.String, required: true },
  address: { type: mongoose.Schema.Types.String, required: true },
});

export const CustomerModel = mongoose.model<ICustomer>(
  "Customer",
  schema,
  COLLECTION_NAME
);
