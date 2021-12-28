"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const COLLECTION_NAME = "orders";
const orderBooksSchema = new mongoose_1.default.Schema({
    book: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: "Book" },
    amount: { type: mongoose_1.default.Schema.Types.Number, required: true },
    price: { type: mongoose_1.default.Schema.Types.Number, required: true },
});
const schema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    area: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    phone: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    books: { type: [orderBooksSchema], default: [] },
    isSold: {
        type: mongoose_1.default.Schema.Types.Boolean,
        required: true,
        default: false,
    },
    orderId: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        default: () => `order_${(0, nanoid_1.nanoid)()}`,
    },
}, { timestamps: true });
exports.OrderModel = mongoose_1.default.model("Order", schema, COLLECTION_NAME);
//# sourceMappingURL=order.model.js.map