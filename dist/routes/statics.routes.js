"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.get("/customers_detail", resources_1.customers_detail);
exports.default = router;
//# sourceMappingURL=statics.routes.js.map