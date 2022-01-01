import { BaseModel, IUser } from ".";

export interface IShipment extends BaseModel {
  month: string;
  year: string;
  total: number;
  createdBy: IUser["_id"];
}
