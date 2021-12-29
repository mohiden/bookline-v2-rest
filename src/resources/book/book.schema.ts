import { getSharedSchema } from "../../utils";
import { object, string, TypeOf } from "zod";

//creating book schema
export const createBookSchema = object({
  body: object({
    name: string({
      required_error: "name must not be empty",
    }).min(1),
    author: string({
      required_error: "name must not be empty",
    })
      .optional()
      .default(""),
    language: string({
      required_error: "language must not be empty",
    }).min(1),
  }).refine((data) => data.language === "EN" || "AR" || "OTHER", {
    message: "Language must be EN or AR or OTHER",
    path: ["language"],
  }),
});
export type CreateBookInput = TypeOf<typeof createBookSchema>;

// getting all books and with pagination and sorting ... etc,
export const getBooksSchema = object({
  ...getSharedSchema,
});
export type GetBooksInput = TypeOf<typeof getBooksSchema>;
