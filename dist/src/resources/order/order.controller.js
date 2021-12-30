"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderHandler = void 0;
const _1 = require(".");
const __1 = require("..");
const createOrderHandler = async (req, res) => {
    var _a;
    try {
        const user = res.locals.user;
        const order = (0, _1.createOrder)(Object.assign(Object.assign({}, req.body), { createdBy: (_a = req.body.createdBy) !== null && _a !== void 0 ? _a : user._id }));
        const customer = await (0, __1.createCustomer)({
            name: order.name,
            phone: order.phone,
            address: order.address,
        });
        const price = await (0, __1.shipmentItemValidation)(order.amount, order.shipmentItem, order.discount);
        if (!price)
            throw new Error("Error, please try again later..");
        order.genDiscountAndTotalPrice(price);
        await order.save();
        return res.send({ order, customerCreated: customer });
    }
    catch (e) {
        console.log("KHALAD:", e);
        return res.status(400).send(e.message || "Error, please try again later");
    }
};
exports.createOrderHandler = createOrderHandler;
//# sourceMappingURL=order.controller.js.map