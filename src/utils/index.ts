import { object, string } from "zod";

export * from "./jwt";

export const getSharedSchema = {
  query: object({
    page: string({ required_error: "Page number must be provided" }).min(1),
    size: string({ required_error: "Size number must be provided" }).min(1),
    search: string().optional().default("")
  }),
  params: object({
    select: string().optional(),
  }),
};
