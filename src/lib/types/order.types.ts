import { BaseModel, IShipmentItem, ItemType, IUser } from ".";

export interface IOrder extends BaseModel {
  name: string;
  type: ItemType | string;
  items: Array<IItem>;
  createdBy: IUser["_id"];
  address: string;
  phone: string;
  totalPrice?: number;
  genDiscountAndTotalPrice: (shipmentItemId: IShipmentItem["_id"], discount: number) => void;
}

export interface IItem {
  _id?: string;
  shipmentItem: IShipmentItem["_id"];
  discount: number;
  amount: number;
  isDelivered?: boolean;
}