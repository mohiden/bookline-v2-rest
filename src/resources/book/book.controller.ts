import { Request, Response } from "express";
import { createBook, CreateBookInput, getBooks, GetBooksInput } from ".";
export const createBookHandler = async (
  req: Request<{}, {}, CreateBookInput["body"]>,
  res: Response
) => {
  try {
    const book = await createBook(req.body);
    return res.send(book);
  } catch (e) {
    //duplicated book name error
    if (
      e &&
      e.code &&
      (e.code === 11000 || e.toString().contains("duplicate key"))
    ) {
      return res.status(400).send("this book name already exist");
    }
    //invalid language enum input
    if (e && e.errors && e.errors.language) {
      return res.status(400).send(e.errors.language.message);
    }

    return res.status(500).send(e.message || e.toString());
  }
};

export const getBooksHandler = async (
  req: Request<
    GetBooksInput["params"],
    {},
    {},
    GetBooksInput["query"] & qs.ParsedQs
  >,
  res: Response
) => {
  try {
    const books = await getBooks(
      {
        limit: Number(req.query.size),
        skip: Number(req.query.page),
      },
      req.params.select
    );
    return res.send({
      data: books,
      count: books.length,
    });
  } catch (e) {
    console.log(e);
    //error if page number is negative = -1 ..etc
    if (e && e.code && e.code === 51024) {
      return res.status(400).send("page number must be 0 or greater");
    }
    return res.status(400).send((e.message && e.message) || e.toString());
  }
};
