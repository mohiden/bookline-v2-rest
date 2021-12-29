export * from "./book.types";
export * from "./user.types";
export * from "./order.types";
export * from "./shipment.types";
export * from "./shipmentItem.types";
export * from "./customer.types";

import { Document } from "mongoose";

export type BookLanguage = "EN" | "AR" | "OTHER";
export type ItemType = "BOOK" | "OTHER";
export interface BaseModel extends Document {
  createdAt: Date;
  updatedAt: Date;
}
