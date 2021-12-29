import { Router } from "express";
import { validateResource } from "..//middleware";
import {
  createShipmentItemHandler,
  createShipmentItemSchema,
  getShipmentItemsHandler,
  getShipmentItemsSchema,
} from "../resources";

const router = Router();
router.get(
  "/:select?",
  validateResource(getShipmentItemsSchema),
  getShipmentItemsHandler
);
router.post(
  "/",
  validateResource(createShipmentItemSchema),
  createShipmentItemHandler
);
export default router;
