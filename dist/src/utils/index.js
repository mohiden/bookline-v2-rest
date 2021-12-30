"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSharedSchema = void 0;
const zod_1 = require("zod");
__exportStar(require("./jwt"), exports);
exports.getSharedSchema = {
    query: (0, zod_1.object)({
        page: (0, zod_1.string)({ required_error: "Page number must be provided" }).min(1),
        size: (0, zod_1.string)({ required_error: "Size number must be provided" }).min(1),
    }),
    params: (0, zod_1.object)({
        select: (0, zod_1.string)().optional(),
    }),
};
//# sourceMappingURL=index.js.map