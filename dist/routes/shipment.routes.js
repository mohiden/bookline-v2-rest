"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.get("/:select?", (0, middleware_1.validateResource)(resources_1.getShipmentsSchema), resources_1.getShipmentsHandler);
router.post("/", (0, middleware_1.validateResource)(resources_1.createShipmentSchema), resources_1.createShipmentHandler);
exports.default = router;
//# sourceMappingURL=shipment.routes.js.map