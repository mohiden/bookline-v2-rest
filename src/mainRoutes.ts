import { Application } from "express";
import { requireUser } from "./middleware";
import { bookRoutes, userRoutes } from "./routes";

export const routes = (app: Application) => {
  // all routes here.

  app.get("/api", (_, res) => {
    res.send("working");
  });
  app.use("/api/user", userRoutes);
  app.use("/api/book", requireUser, bookRoutes);
};
