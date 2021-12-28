import { array, number, object, string, TypeOf } from "zod";

const shipmentBooksSchema = object({
  book: string({ required_error: "bookId must not be empty" }),
  amount: number({ required_error: "Amount must not be empty" }),
});
export const createShipmentSchema = object({
  body: object({
    month: string({ required_error: "Month must not be empty" }),
    year: string({ required_error: "Year must not be empty" }).max(4, {
      message: "Please enter valid year",
    }),
    books: array(shipmentBooksSchema),
  }),
});

export type CreateShipmentInput = TypeOf<typeof createShipmentSchema>;
