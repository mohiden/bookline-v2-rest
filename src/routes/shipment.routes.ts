import { Router } from "express";
import { validateResource } from "../middleware";
import { createShipmentHandler, createShipmentSchema } from "../resources";

export const router = Router();

router.post("/", validateResource(createShipmentSchema), createShipmentHandler);
