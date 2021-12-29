import { BaseModel, IShipmentItem, ItemType, IUser } from ".";

export interface IOrder extends BaseModel {
  name: string;
  shipmentItem: IShipmentItem["_id"];
  type: ItemType | string;
  createdBy: IUser["_id"];
  address: string;
  phone: string;
  isDelivered?: boolean;
  totalPrice?: number;
  discount: number;
  amount: number;
  genDiscountAndTotalPrice: (price: number) => void;
}
