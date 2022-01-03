"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.get("/", (0, middleware_1.validateResource)(resources_1.getCustomersSchema), resources_1.getCustomersHandler);
exports.default = router;
//# sourceMappingURL=customer.routes.js.map