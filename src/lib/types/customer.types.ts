import { Model } from "mongoose";
import { BaseModel } from ".";

export interface ICustomer extends BaseModel {
  name: string;
  phone: string;
  address: string;
}

export interface ICustomerModel extends Model<ICustomer> {
  customersDetail: () => Promise<any>;
}