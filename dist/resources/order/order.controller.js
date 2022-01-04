"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersHandler = exports.createOrderHandler = void 0;
const _1 = require(".");
const __1 = require("..");
const createOrderHandler = async (req, res) => {
    try {
        const user = res.locals.user;
        const order = (0, _1.createOrder)(Object.assign(Object.assign({}, req.body), { createdBy: user["_id"] }));
        const errors = await Promise.all(order.items.map(async (item) => {
            return await (0, __1.shipmentItemValidation)(item.amount, item.shipmentItem, item.discount);
        }));
        if (errors.filter(Boolean).length > 0) {
            console.log(errors);
            throw new Error(errors.toString());
        }
        await Promise.all(order.items.map(async (item) => {
            const shipmentItem = await __1.shipmentItemModel.findOne({ _id: item.shipmentItem });
            if (shipmentItem) {
                shipmentItem.left = shipmentItem.left - item.amount;
                order.genDiscountAndTotalPrice(shipmentItem._id, item.discount);
                return await shipmentItem.save();
            }
            return null;
        }));
        const customer = await (0, __1.createCustomer)({
            name: order.name,
            phone: order.phone,
            address: order.address,
        });
        await order.save();
        return res.send({ order, customerCreated: customer });
    }
    catch (e) {
        console.log("KHALAD:", e);
        return res.status(400).send(e.message || "Error, please try again later");
    }
};
exports.createOrderHandler = createOrderHandler;
const getOrdersHandler = async (req, res) => {
    try {
        const books = await (0, _1.getOrders)({
            limit: Number(req.query.size),
            skip: Number(req.query.page),
            sort: {
                'createdAt': "desc",
            },
        }, req.params.select, req.query.search);
        return res.send(books);
    }
    catch (e) {
        console.log(e);
        if (e && e.code && e.code === 51024) {
            return res.status(400).send("page number must be 0 or greater");
        }
        return res.status(400).send((e.message && e.message) || e.toString());
    }
};
exports.getOrdersHandler = getOrdersHandler;
//# sourceMappingURL=order.controller.js.map