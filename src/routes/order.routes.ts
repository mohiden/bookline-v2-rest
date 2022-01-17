import { Router } from "express";
import { validateResource } from "../middleware";
import {
    createOrderHandler,
    createOrderSchema,
    getOrdersHandler,
    getOrdersSchema,
    markAsDeliveredSchema,
    mark_as_delivered_handler,
} from "../resources";

const router = Router();

router.get("/:select?", validateResource(getOrdersSchema), getOrdersHandler);
router.post("/", validateResource(createOrderSchema), createOrderHandler);
router.get(
    "/mark_as_delivered/:orderId/:itemId",
    validateResource(markAsDeliveredSchema),
    mark_as_delivered_handler
);
export default router;
