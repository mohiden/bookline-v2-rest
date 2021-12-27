"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    console.log(req.body);
    res.send("Here");
});
router.post("/", (0, middleware_1.validateResource)(resources_1.createBookSchema), resources_1.createBookHandler);
//# sourceMappingURL=book.routes.js.map