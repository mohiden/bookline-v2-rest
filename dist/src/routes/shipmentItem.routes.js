"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("..//middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.get("/:select?", (0, middleware_1.validateResource)(resources_1.getShipmentItemsSchema), resources_1.getShipmentItemsHandler);
router.post("/", (0, middleware_1.validateResource)(resources_1.createShipmentItemSchema), resources_1.createShipmentItemHandler);
exports.default = router;
//# sourceMappingURL=shipmentItem.routes.js.map