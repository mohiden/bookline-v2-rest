import { NextFunction, Request, Response } from "express";

export function requireUser(_: Request, res: Response, next: NextFunction) {
  const user = res.locals.user;
  if (!user) return res.sendStatus(401);
  return next();
}
