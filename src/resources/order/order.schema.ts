import { number, object, string, TypeOf } from "zod";

export const createOrderSchema = object({
  body: object({
    name: string({ required_error: "Name must not be empty" }),
    type: string({ required_error: "Item type must be provided" }),
    createdBy: string().optional(),
    address: string({ required_error: "area must not be empty" }),
    phone: string({ required_error: "Phone must not be empty" }),
    shipmentItem: string({
      required_error: "shipmentItemId must not be empty",
    }),
    discount: number().default(0),
    amount: number({ required_error: "Amount must not be empty" }).min(1),
  }).refine((data) => data.type === "BOOK" || data.type === "OTHER", {
    message: "type must be BOOK or OTHER",
  }),
});

export type CreateOrderInput = TypeOf<typeof createOrderSchema>;
