"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersSchema = exports.createOrderSchema = void 0;
const utils_1 = require("../../utils");
const zod_1 = require("zod");
const itemSchema = (0, zod_1.object)({
    shipmentItem: (0, zod_1.string)({
        required_error: "shipmentItemId must not be empty",
    }),
    discount: (0, zod_1.number)({ required_error: "Discount must be less than 0" }).min(0).default(0),
    amount: (0, zod_1.number)({ required_error: "Amount must not be empty" }).min(1),
});
exports.createOrderSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: "Name must not be empty" }),
        type: (0, zod_1.string)({ required_error: "Item type must be provided" }),
        createdBy: (0, zod_1.string)().optional(),
        address: (0, zod_1.string)({ required_error: "area must not be empty" }),
        items: (0, zod_1.array)(itemSchema),
        phone: (0, zod_1.string)({ required_error: "Phone must not be empty" }),
    }).refine((data) => data.type === "BOOK" || data.type === "OTHER", {
        message: "type must be BOOK or OTHER",
    }),
});
exports.getOrdersSchema = (0, zod_1.object)(Object.assign({}, utils_1.getSharedSchema));
//# sourceMappingURL=order.schema.js.map