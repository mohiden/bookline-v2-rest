import { Application } from "express";
import { requireUser } from "./middleware";
import {
  bookRoutes,
  customerRoutes,
  orderRoutes,
  shipmentItemRoutes,
  shipmentRoutes,
  staticRoutes,
  userRoutes,
} from "./routes";

export const routes = (app: Application) => {
  // all routes here.

  //health check
  app.get("/api", (_, res) => {
    res.send("working");
  });

  app.use("/api/user", userRoutes);
  app.use("/api/book", requireUser, bookRoutes);
  app.use("/api/shipment", requireUser, shipmentRoutes);
  app.use("/api/shipmentItem", requireUser, shipmentItemRoutes);
  app.use("/api/order", requireUser, orderRoutes);
  app.use("/api/customer", requireUser, customerRoutes);
  app.use("/api/static", requireUser, staticRoutes);
};
