import { DocumentDefinition } from "mongoose";
import { BookModel } from ".";
import { IBook } from "../../lib";

export const createBook = (
  input: DocumentDefinition<Omit<IBook, "updatedAt" | "createdAt">>
) => {
  return BookModel.create(input);
};
