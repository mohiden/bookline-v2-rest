import { Request, Response } from "express";
import { createBook, CreateBookInput } from ".";

export const createBookHandler = async (
  req: Request<{}, {}, CreateBookInput["body"]>,
  res: Response
) => {
  try {
    console.log("USER:", res.locals.user);
    const book = await createBook(req.body);
    return res.send(book);
  } catch (e) {
    //duplicated book name error
    if (e.code === 11000 || e.toString().contains("duplicate key")) {
      return res.status(400).send("this book name is used");
    }
    return res.status(500).send(e);
  }
};
