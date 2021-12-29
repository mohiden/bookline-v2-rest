import { DocumentDefinition } from "mongoose";
import { ICustomer } from "src/lib";
import { CustomerModel } from ".";

export const createCustomer = async (
  input: DocumentDefinition<Omit<ICustomer, "updatedAt" | "createdAt">>
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
