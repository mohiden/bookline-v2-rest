import { Document } from "mongoose";

export type BookLanguage = "EN" | "AR" | "OTHER";

export interface BaseModel extends Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends BaseModel {
  username: string;
  password: string;
  comparePassword: (logPassword: string) => Promise<boolean>;
}

export interface IBook extends BaseModel {
  name: string;
  author: string;
  language: string;
}

export interface IOrder extends BaseModel {
  name: string;
  createdBy: IUser["_id"];
  area: string;
  phone: string;
  books: IBook &
    {
      price: string;
      amount: number;
    }[];
  isDelivered: boolean;
  isOrdered: boolean;
  orderId: string;
}
