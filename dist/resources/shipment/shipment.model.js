"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "Shipment";
const booksSchema = new mongoose_1.default.Schema({
    book: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: "Book" },
    amount: { type: mongoose_1.default.Schema.Types.Number, required: true },
});
const schema = new mongoose_1.default.Schema({
    month: { type: mongoose_1.default.Schema.Types.String, required: true },
    year: { type: mongoose_1.default.Schema.Types.String, required: true },
    createdBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    books: { type: [booksSchema], default: [] },
    totalBooks: { type: mongoose_1.default.Schema.Types.Number, default: 0 },
}, { timestamps: true });
schema.pre("save", async function () {
    if (this.isModified("books")) {
        const count = this.books.length;
        this.totalBooks = count;
    }
});
exports.ShipmentModel = mongoose_1.default.model("Shipment", schema, COLLECTION_NAME);
//# sourceMappingURL=shipment.model.js.map