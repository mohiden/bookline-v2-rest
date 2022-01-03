"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomersSchema = void 0;
const utils_1 = require("../../utils");
const zod_1 = require("zod");
exports.getCustomersSchema = (0, zod_1.object)(Object.assign({}, utils_1.getSharedSchema));
//# sourceMappingURL=customer.schema.js.map