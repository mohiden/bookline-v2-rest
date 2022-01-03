import { getSharedSchema } from "../../utils";
import { object, TypeOf } from "zod";

// getting all books and with pagination and sorting ... etc,
export const getCustomersSchema = object({
    ...getSharedSchema,
});
export type GetCustomersInput = TypeOf<typeof getCustomersSchema>;