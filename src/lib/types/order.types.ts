import { BaseModel, IBook, IUser } from ".";

export interface IOrder extends BaseModel {
  name: string;
  createdBy: IUser["_id"];
  area: string;
  phone: string;
  books: Array<IOrderBooks>;
  isSold: boolean;
  orderId: string;
}

export type IOrderBooks = {
  book: IBook["_id"];
  amount: number;
  price: number;
};
