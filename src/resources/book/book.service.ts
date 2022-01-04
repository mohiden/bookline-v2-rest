import { DocumentDefinition, QueryOptions } from "mongoose";
import { BookModel } from ".";
import { IBook } from "../../lib";

export const createBook = (
  input: DocumentDefinition<Omit<IBook, "updatedAt" | "createdAt">>
) => {
  return BookModel.create(input);
};

export const getBooks = (
  options: QueryOptions = { lean: true },
  select?: string,
  search?: string
) => {
  return BookModel.find(search ? { name: { $regex: '.*' + search + '.*' } } : {}, {}, options).select(select).exec();
};
