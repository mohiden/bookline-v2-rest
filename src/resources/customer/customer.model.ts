import mongoose from "mongoose";
import { ICustomer, ICustomerModel } from "src/lib";

const COLLECTION_NAME = "customers";
const schema = new mongoose.Schema<ICustomer>({
  name: { type: mongoose.Schema.Types.String, required: true },
  phone: { type: mongoose.Schema.Types.String, required: true },
  address: { type: mongoose.Schema.Types.String, required: true },
});

schema.statics.customersDetail = async function () {
  const all: ICustomer[] = await this.find();
  const names: Array<{ value: string }> = [];
  const phones: Array<{ value: string }> = [];
  const address: Array<{ value: string }> = [];
  await Promise.all(all.map((i: any) => {
    names.push({ value: i.name });
    phones.push({ value: i.phone });
    address.push({ value: i.address });
  }));
  return { names, phones, address };
}


export const CustomerModel = mongoose.model<ICustomer, ICustomerModel>(
  "Customer",
  schema,
  COLLECTION_NAME
);

