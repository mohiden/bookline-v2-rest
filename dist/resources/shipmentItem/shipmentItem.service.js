"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipmentItemValidation = exports.getShipmentItems = exports.createShipmentItem = void 0;
const _1 = require(".");
const createShipmentItem = (input) => {
    return _1.shipmentItemModel.create(input);
};
exports.createShipmentItem = createShipmentItem;
const getShipmentItems = (options = { lean: true, skip: 0, limit: 0 }, select, search) => {
    return _1.shipmentItemModel
        .find(search ? { name: { $regex: '.*' + search + '.*' } } : {}, {}, options)
        .populate("shipment")
        .select(select);
};
exports.getShipmentItems = getShipmentItems;
const shipmentItemValidation = async (amount, shipmentItemId, discount = 0) => {
    let error = '';
    const item = await _1.shipmentItemModel.findOne({ _id: shipmentItemId });
    if (!item) {
        error = "shipment item was not found!";
        return error;
    }
    const isDiscountValid = item.checkDiscount(discount);
    if (!isDiscountValid) {
        error = item.name + ":Discount must be less than item price";
        return error;
    }
    const isAmount = item.checkAmount(amount);
    if (!isAmount) {
        error = item.name + ":The requested amount is not available";
        return error;
    }
    return;
};
exports.shipmentItemValidation = shipmentItemValidation;
//# sourceMappingURL=shipmentItem.service.js.map