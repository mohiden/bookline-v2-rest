import { getSharedSchema } from "../../utils";
import { number, object, string, TypeOf } from "zod";

export const createShipmentItemSchema = object({
  body: object({
    name: string({ required_error: "Name must not be empty" }),
    type: string({ required_error: "Item type must not be empty" }),
    amount: number({ required_error: "Amount must not be empty" }).min(1),
    price: number({ required_error: "Price must not be empty" }).min(1),
    shipment: string({ required_error: "shipment id must not be empty" }),
  }).refine((data) => data.type === "BOOK" || data.type === "OTHER", {
    message: "Type must bot BOOK or OTHER",
  }),
});
export type CreateShipmentItemInput = TypeOf<typeof createShipmentItemSchema>;

//get shipment items and its pagination...etc.
export const getShipmentItemsSchema = object({
  ...getSharedSchema,
});
export type GetShipmentItemsInput = TypeOf<typeof getShipmentItemsSchema>;
