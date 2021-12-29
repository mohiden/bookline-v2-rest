import { Router } from "express";
import { validateResource } from "../middleware";
import { createOrderHandler, createOrderSchema } from "../resources";

const router = Router();

router.post("/", validateResource(createOrderSchema), createOrderHandler);

export default router;
