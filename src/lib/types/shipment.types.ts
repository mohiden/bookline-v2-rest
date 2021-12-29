import { BaseModel, IUser } from ".";

export interface IShipment extends BaseModel {
  month: string;
  year: string;
  createdBy: IUser["_id"];
}
