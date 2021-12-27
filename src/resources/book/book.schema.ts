import { object, string, TypeOf } from "zod";

export const createBookSchema = object({
  body: object({
    name: string({
      required_error: "name must not be empty",
    }),
    author: string({
      required_error: "author must not be empty",
    }),
    language: string({
      required_error: "language must not be empty",
    }),
  }),
});
export type CreateBookInput = TypeOf<typeof createBookSchema>;
