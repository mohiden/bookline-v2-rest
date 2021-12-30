"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksSchema = exports.createBookSchema = void 0;
const utils_1 = require("../../utils");
const zod_1 = require("zod");
exports.createBookSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "name must not be empty",
        }).min(1),
        author: (0, zod_1.string)({
            required_error: "name must not be empty",
        })
            .optional()
            .default(""),
        language: (0, zod_1.string)({
            required_error: "language must not be empty",
        }).min(1),
    }).refine((data) => data.language === "EN" || "AR" || "OTHER", {
        message: "Language must be EN or AR or OTHER",
        path: ["language"],
    }),
});
exports.getBooksSchema = (0, zod_1.object)(Object.assign({}, utils_1.getSharedSchema));
//# sourceMappingURL=book.schema.js.map