"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = void 0;
const _1 = require(".");
const createCustomer = async (input) => {
    const customer = await _1.CustomerModel.findOne({
        name: input.name,
        phone: input.phone,
    })
        .lean()
        .exec();
    if (!customer)
        return _1.CustomerModel.create(input);
    return null;
};
exports.createCustomer = createCustomer;
//# sourceMappingURL=customer.service.js.map