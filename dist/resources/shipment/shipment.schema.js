"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShipmentSchema = void 0;
const zod_1 = require("zod");
const shipmentBooksSchema = (0, zod_1.object)({
    book: (0, zod_1.string)({ required_error: "bookId must not be empty" }),
    amount: (0, zod_1.number)({ required_error: "Amount must not be empty" }),
});
exports.createShipmentSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        month: (0, zod_1.string)({ required_error: "Month must not be empty" }),
        year: (0, zod_1.string)({ required_error: "Year must not be empty" }).max(4, {
            message: "Please enter valid year",
        }),
        books: (0, zod_1.array)(shipmentBooksSchema),
    }),
});
//# sourceMappingURL=shipment.schema.js.map