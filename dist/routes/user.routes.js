"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
exports.router = (0, express_1.Router)();
exports.router.post("/", (0, middleware_1.validateResource)(resources_1.createUserSchema), resources_1.createUserHandler);
exports.router.post("/login", (0, middleware_1.validateResource)(resources_1.loginUserSchema), resources_1.loginUserHandler);
//# sourceMappingURL=user.routes.js.map