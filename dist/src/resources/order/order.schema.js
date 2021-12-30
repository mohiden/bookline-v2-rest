"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: "Name must not be empty" }),
        type: (0, zod_1.string)({ required_error: "Item type must be provided" }),
        createdBy: (0, zod_1.string)().optional(),
        address: (0, zod_1.string)({ required_error: "area must not be empty" }),
        phone: (0, zod_1.string)({ required_error: "Phone must not be empty" }),
        shipmentItem: (0, zod_1.string)({
            required_error: "shipmentItemId must not be empty",
        }),
        discount: (0, zod_1.number)().default(0),
        amount: (0, zod_1.number)({ required_error: "Amount must not be empty" }).min(1),
    }).refine((data) => data.type === "BOOK" || data.type === "OTHER", {
        message: "type must be BOOK or OTHER",
    }),
});
//# sourceMappingURL=order.schema.js.map