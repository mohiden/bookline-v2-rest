"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customers_detail = exports.getCustomersHandler = void 0;
const _1 = require(".");
const getCustomersHandler = async (req, res) => {
    try {
        const customers = await (0, _1.getCustomers)({
            limit: Number(req.query.size),
            skip: Number(req.query.page),
        }, req.params.select);
        return res.send(customers);
    }
    catch (e) {
        console.log(e);
        if (e && e.code && e.code === 51024) {
            return res.status(400).send("page number must be 0 or greater");
        }
        return res.status(400).send((e.message && e.message) || e.toString());
    }
};
exports.getCustomersHandler = getCustomersHandler;
const customers_detail = async (_, res) => {
    try {
        const all = await _1.CustomerModel.customersDetail();
        return res.send(all);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send(e.message || "Error occurred");
    }
};
exports.customers_detail = customers_detail;
//# sourceMappingURL=customer.controller.js.map