"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const _1 = require(".");
const createOrder = (input) => {
    const order = new _1.OrderModel(input);
    return order;
};
exports.createOrder = createOrder;
//# sourceMappingURL=order.service.js.map