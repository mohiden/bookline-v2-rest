import { BaseModel, IShipmentItem, ItemType, IUser } from ".";

export interface IOrder extends BaseModel {
  name: string;
  type: ItemType | string;
  items: Array<IItem>;
  createdBy: IUser["_id"];
  address: string;
  phone: string;
  totalPrice?: number;
  genDiscountAndTotalPrice: (shipmentItemId: IShipmentItem["_id"]) => void;
}

export interface IItem {
  shipmentItem: IShipmentItem["_id"];
  discount: number;
  amount: number;
  isDelivered?: boolean;
}