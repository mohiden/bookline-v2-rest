"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "customers";
const schema = new mongoose_1.default.Schema({
    name: { type: mongoose_1.default.Schema.Types.String, required: true },
    phone: { type: mongoose_1.default.Schema.Types.String, required: true },
    address: { type: mongoose_1.default.Schema.Types.String, required: true },
});
schema.statics.customersDetail = async function () {
    const all = await this.find();
    const names = [];
    const phones = [];
    const addresses = [];
    await Promise.all(all.map((i) => {
        names.push({ value: i.name });
        phones.push({ value: i.phone });
        addresses.push({ value: i.address });
    }));
    return { names, phones, addresses };
};
exports.CustomerModel = mongoose_1.default.model("Customer", schema, COLLECTION_NAME);
//# sourceMappingURL=customer.model.js.map