"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "books";
const schema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
    },
    author: {
        type: mongoose_1.default.Schema.Types.String,
        default: "",
    },
    language: {
        type: mongoose_1.default.Schema.Types.String,
        enum: ["AR", "EN", "OTHER"],
        required: true,
    },
}, { timestamps: true });
schema.index({ name: 'text' });
exports.BookModel = mongoose_1.default.model("Book", schema, COLLECTION_NAME);
//# sourceMappingURL=book.model.js.map