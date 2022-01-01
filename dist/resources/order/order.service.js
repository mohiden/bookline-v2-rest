"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.createOrder = void 0;
const _1 = require(".");
const createOrder = (input) => {
    const order = new _1.OrderModel(input);
    return order;
};
exports.createOrder = createOrder;
const getOrders = (options = { lean: true }, select) => {
    return _1.OrderModel.find({}, {}, options)
        .populate({
        path: "items",
        populate: {
            path: "shipmentItem",
            select: "name type left price"
        }
    })
        .select(select).exec();
};
exports.getOrders = getOrders;
//# sourceMappingURL=order.service.js.map