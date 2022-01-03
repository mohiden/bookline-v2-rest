import { DocumentDefinition, QueryOptions } from "mongoose";
import { ICustomer } from "src/lib";
import { CustomerModel } from ".";

export const createCustomer = async (
  input: DocumentDefinition<Omit<ICustomer, "updatedAt" | "createdAt" | "customersDetail">>
) => {
  const customer = await CustomerModel.findOne({
    name: input.name,
    phone: input.phone,
  })
    .lean()
    .exec();
  if (!customer) return CustomerModel.create(input);
  return null;
};

export const getCustomers = (
  options: QueryOptions = { lean: true },
  select?: string
) => {
  return CustomerModel.find({}, {}, options).select(select);
};
