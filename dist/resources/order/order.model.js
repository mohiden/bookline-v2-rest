"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const __1 = require("..");
const COLLECTION_NAME = "orders";
const itemSchema = new mongoose_1.default.Schema({
    shipmentItem: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "ShipmentItem"
    },
    isDelivered: {
        type: mongoose_1.default.Schema.Types.Boolean,
        default: false,
    },
    discount: {
        type: mongoose_1.default.Schema.Types.Number,
        default: 0,
    },
    amount: {
        type: mongoose_1.default.Schema.Types.Number,
        default: 0,
    },
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
    address: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    phone: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    items: {
        type: [itemSchema],
        required: true,
        default: [],
    },
    totalPrice: {
        type: mongoose_1.default.Schema.Types.Number,
        default: 0,
    },
}, { timestamps: true });
schema.methods.genDiscountAndTotalPrice = async function (shipmentItemId) {
    var _a;
    const shipmentItem = await __1.shipmentItemModel.findOne({ _id: shipmentItemId });
    if (!shipmentItem)
        throw new Error('Shipment item was not found!!!');
    const itemAmount = (_a = this.items.find(item => item.shipmentItem.toString() === shipmentItemId.toString())) === null || _a === void 0 ? void 0 : _a.amount;
    if (!itemAmount)
        return console.log("item amount not found");
    this.totalPrice = this.totalPrice + itemAmount * shipmentItem.price;
};
exports.OrderModel = mongoose_1.default.model("Order", schema, COLLECTION_NAME);
//# sourceMappingURL=order.model.js.map