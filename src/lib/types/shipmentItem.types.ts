import { BaseModel, IShipment, ItemType } from ".";

export interface IShipmentItem extends BaseModel {
  name: string;
  type: ItemType | string;
  shipment: IShipment["_id"];
  amount: number;
  price: number;
  left: number;
  totalPrice?: number;
  checkAmount: (amount: number) => boolean;
  checkDiscount: (discount: number) => boolean;
}
