import { Router } from "express";
import { validateResource } from "../middleware";
import { createOrderHandler, createOrderSchema, getOrdersHandler, getOrdersSchema } from "../resources";

const router = Router();

router.get("/:select?", validateResource(getOrdersSchema), getOrdersHandler);
router.post("/", validateResource(createOrderSchema), createOrderHandler);
export default router;
