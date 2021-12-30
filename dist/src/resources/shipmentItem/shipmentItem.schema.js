"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipmentItemsSchema = exports.createShipmentItemSchema = void 0;
const utils_1 = require("../../utils");
const zod_1 = require("zod");
exports.createShipmentItemSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: "Name must not be empty" }),
        type: (0, zod_1.string)({ required_error: "Item type must not be empty" }),
        amount: (0, zod_1.number)({ required_error: "Amount must not be empty" }).min(1),
        price: (0, zod_1.number)({ required_error: "Price must not be empty" }).min(1),
        shipment: (0, zod_1.string)({ required_error: "shipment id must not be empty" }),
    }).refine((data) => data.type === "BOOK" || data.type === "OTHER", {
        message: "Type must bot BOOK or OTHER",
    }),
});
exports.getShipmentItemsSchema = (0, zod_1.object)(Object.assign({}, utils_1.getSharedSchema));
//# sourceMappingURL=shipmentItem.schema.js.map