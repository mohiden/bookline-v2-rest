"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mark_as_delivered = exports.getOrders = exports.createOrder = void 0;
const _1 = require(".");
const createOrder = (input) => {
    const order = new _1.OrderModel(input);
    return order;
};
exports.createOrder = createOrder;
const getOrders = (options = { lean: true }, select, search) => {
    return _1.OrderModel.find(search ? { name: { $regex: '.*' + search + '.*' } } : {}, {}, options)
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
const mark_as_delivered = (orderId, itemId) => {
    _1.OrderModel.findOne({ _id: orderId }, async function (_, order) {
        order.items.map(item => {
            var _a;
            if (((_a = item._id) === null || _a === void 0 ? void 0 : _a.toString()) === (itemId === null || itemId === void 0 ? void 0 : itemId.toString())) {
                console.log(item);
                item.isDelivered = true;
            }
        });
        await order.save();
    });
};
exports.mark_as_delivered = mark_as_delivered;
//# sourceMappingURL=order.service.js.map