import { Router } from "express";
import { validateResource } from "../middleware";
import {
  createShipmentHandler,
  createShipmentSchema,
  getShipmentsHandler,
  getShipmentsSchema,
} from "../resources";

const router = Router();

router.get(
  "/:select?",
  validateResource(getShipmentsSchema),
  getShipmentsHandler
);
router.post("/", validateResource(createShipmentSchema), createShipmentHandler);

export default router;
