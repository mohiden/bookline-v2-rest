"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
router.get("/:select?", (0, middleware_1.validateResource)(resources_1.getBooksSchema), resources_1.getBooksHandler);
router.post("/", (0, middleware_1.validateResource)(resources_1.createBookSchema), resources_1.createBookHandler);
exports.default = router;
//# sourceMappingURL=book.routes.js.map