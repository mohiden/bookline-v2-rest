import { getSharedSchema } from "../../utils";
import { number, object, string, TypeOf } from "zod";

export const createShipmentSchema = object({
  body: object({
    month: string({ required_error: "Month must not be empty" }),
    year: string({ required_error: "Year must not be empty" }).max(4, {
      message: "Please enter valid year",
    }),
    total: number({ required_error: "Month must not be empty" }).min(1),
  }),
});
export type CreateShipmentInput = TypeOf<typeof createShipmentSchema>;

// get shipments and its pagination... etc.
export const getShipmentsSchema = object({
  ...getSharedSchema,
});
export type GetShipmentsInput = TypeOf<typeof getShipmentsSchema>;
