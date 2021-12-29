"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipmentItemModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "shipmentItems";
const schema = new mongoose_1.default.Schema({
    name: { type: mongoose_1.default.Schema.Types.String, required: true },
    type: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        enum: ["BOOK", "OTHER"],
    },
    amount: { type: mongoose_1.default.Schema.Types.Number, required: true },
    left: { type: mongoose_1.default.Schema.Types.Number, default: 0 },
    price: { type: mongoose_1.default.Schema.Types.Number, required: true },
    totalPrice: { type: mongoose_1.default.Schema.Types.Number, default: 0 },
    shipment: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Shipment",
    },
}, { timestamps: true });
schema.pre("save", function () {
    if (this.isModified("price") &&
        this.isModified("amount") &&
        !this.isModified("totalPrice")) {
        this.left = this.amount;
        this.totalPrice = this.amount * this.price;
    }
});
schema.methods.checkAmount = function (amount) {
    return amount <= this.amount && this.left > 0 && amount <= this.left;
};
schema.methods.checkDiscount = function (discount) {
    return this.price > discount;
};
exports.shipmentItemModel = mongoose_1.default.model("ShipmentItem", schema, COLLECTION_NAME);
//# sourceMappingURL=shipmentItem.model.js.map