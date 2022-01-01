"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.get("/:select?", (0, middleware_1.validateResource)(resources_1.getOrdersSchema), resources_1.getOrdersHandler);
router.post("/", (0, middleware_1.validateResource)(resources_1.createOrderSchema), resources_1.createOrderHandler);
exports.default = router;
//# sourceMappingURL=order.routes.js.map