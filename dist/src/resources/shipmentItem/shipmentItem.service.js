"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipmentItemValidation = exports.getShipmentItems = exports.createShipmentItem = void 0;
const _1 = require(".");
const createShipmentItem = (input) => {
    return _1.shipmentItemModel.create(input);
};
exports.createShipmentItem = createShipmentItem;
const getShipmentItems = (options = { lean: true, skip: 0, limit: 0 }, select) => {
    return _1.shipmentItemModel
        .find({}, {}, options)
        .populate("shipment")
        .select(select);
};
exports.getShipmentItems = getShipmentItems;
const shipmentItemValidation = async (amount, shipmentItemId, discount = 0) => {
    const item = await _1.shipmentItemModel.findOne({ _id: shipmentItemId });
    if (!item)
        throw new Error("shipment item was not found!");
    const isDiscountValid = item.checkDiscount(discount);
    if (!isDiscountValid)
        throw new Error("Discount must be less than item price");
    const isAmount = item.checkAmount(amount);
    if (!isAmount)
        throw new Error("The requested amount  is not available");
    item.left = item.left - amount;
    await item.save();
    return item.price;
};
exports.shipmentItemValidation = shipmentItemValidation;
//# sourceMappingURL=shipmentItem.service.js.map