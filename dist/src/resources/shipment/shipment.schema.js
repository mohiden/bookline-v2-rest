"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipmentsSchema = exports.createShipmentSchema = void 0;
const utils_1 = require("../../utils");
const zod_1 = require("zod");
exports.createShipmentSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        month: (0, zod_1.string)({ required_error: "Month must not be empty" }),
        year: (0, zod_1.string)({ required_error: "Year must not be empty" }).max(4, {
            message: "Please enter valid year",
        }),
    }),
});
exports.getShipmentsSchema = (0, zod_1.object)(Object.assign({}, utils_1.getSharedSchema));
//# sourceMappingURL=shipment.schema.js.map