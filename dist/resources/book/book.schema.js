"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookSchema = void 0;
const zod_1 = require("zod");
exports.createBookSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "name must not be empty",
        }),
        author: (0, zod_1.string)({
            required_error: "author must not be empty",
        }),
        language: (0, zod_1.string)({
            required_error: "language must not be empty",
        }),
    }),
});
//# sourceMappingURL=book.schema.js.map