import { Request, Response } from "express";
import { createUser, CreateUserInput, loginUser, LoginUserInput } from ".";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e) {
    if (e.code === 11000 || e.toString().contains("duplicate key")) {
      return res.status(400).send("this username is taken");
    }
    return res.status(500).send(e.message);
  }
};

export const loginUserHandler = async (
  req: Request<{}, {}, LoginUserInput["body"]>,
  res: Response
) => {
  try {
    const token = await loginUser(req.body);
    return res.send(token);
  } catch (e) {
    if (e.message) {
      return res.status(400).send(e.message);
    }
    return res
      .status(500)
      .send("Something wen't wrong, please try again later!");
  }
};
