import { getSharedSchema } from "../../utils";
import { array, number, object, string, TypeOf } from "zod";

const itemSchema = object({
  shipmentItem: string({
    required_error: "shipmentItemId must not be empty",
  }),
  discount: number({ required_error: "Discount must be less than 0" }).min(0).default(0),
  amount: number({ required_error: "Amount must not be empty" }).min(1),
})

export const createOrderSchema = object({
  body: object({
    name: string({ required_error: "Name must not be empty" }),
    type: string({ required_error: "Item type must be provided" }),
    createdBy: string().optional(),
    address: string({ required_error: "area must not be empty" }),
    items: array(itemSchema),
    phone: string({ required_error: "Phone must not be empty" }),
  }).refine((data) => data.type === "BOOK" || data.type === "OTHER", {
    message: "type must be BOOK or OTHER",
  }),
});
export type CreateOrderInput = TypeOf<typeof createOrderSchema>;

// getting all books and with pagination and sorting ... etc,
export const getOrdersSchema = object({
  ...getSharedSchema,
});
export type GetOrdersInput = TypeOf<typeof getOrdersSchema>;

