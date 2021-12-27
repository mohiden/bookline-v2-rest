import mongoose from "mongoose";
import { IBook } from "../../lib";

const COLLECTION_NAME = "books";

const schema = new mongoose.Schema<IBook>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  author: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  language: {
    type: mongoose.Schema.Types.String,
    enum: ["AR", "EN", "OTHER"],
    required: true,
  },
});

export const BookModel = mongoose.model<IBook>("Book", schema, COLLECTION_NAME);
