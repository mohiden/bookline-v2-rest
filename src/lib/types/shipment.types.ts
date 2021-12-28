import { BaseModel, IBook, IUser } from ".";

export interface IShipment extends BaseModel {
  month: string;
  year: string;
  createdBy: IUser["_id"];
  totalBooks: number;
  books: Array<IShipmentBooks>;
}

export type IShipmentBooks = {
  book: IBook["_id"];
  amount: number;
};
