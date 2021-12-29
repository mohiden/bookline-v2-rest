"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "orders";
const schema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    address: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    phone: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    isDelivered: {
        type: mongoose_1.default.Schema.Types.Boolean,
        default: false,
    },
    shipmentItem: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "ShipmentItem",
    },
    discount: {
        type: mongoose_1.default.Schema.Types.Number,
        default: 0,
    },
    totalPrice: {
        type: mongoose_1.default.Schema.Types.Number,
        default: 0,
    },
    amount: {
        type: mongoose_1.default.Schema.Types.Number,
        default: 0,
    },
}, { timestamps: true });
schema.methods.genDiscountAndTotalPrice = function (price) {
    this.totalPrice = this.amount * price;
    this.totalPrice =
        this.discount > 0 ? this.totalPrice - this.discount : this.totalPrice;
};
exports.OrderModel = mongoose_1.default.model("Order", schema, COLLECTION_NAME);
//# sourceMappingURL=order.model.js.map