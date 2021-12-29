"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "shipments";
const schema = new mongoose_1.default.Schema({
    month: { type: mongoose_1.default.Schema.Types.String, required: true },
    year: { type: mongoose_1.default.Schema.Types.String, required: true },
    createdBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });
exports.ShipmentModel = mongoose_1.default.model("Shipment", schema, COLLECTION_NAME);
//# sourceMappingURL=shipment.model.js.map