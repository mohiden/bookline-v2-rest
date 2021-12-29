"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.post("/", (0, middleware_1.validateResource)(resources_1.createUserSchema), resources_1.createUserHandler);
router.post("/login", (0, middleware_1.validateResource)(resources_1.loginUserSchema), resources_1.loginUserHandler);
exports.default = router;
//# sourceMappingURL=user.routes.js.map