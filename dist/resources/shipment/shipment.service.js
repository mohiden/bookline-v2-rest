"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipments = exports.createShipment = void 0;
const _1 = require(".");
const createShipment = (input) => {
    return _1.ShipmentModel.create(input);
};
exports.createShipment = createShipment;
const getShipments = (options = { lean: true, skip: 0, limit: 5 }, select) => {
    return _1.ShipmentModel.find({}, {}, options)
        .populate({
        path: "createdBy",
        select: "-password",
    })
        .select(select);
};
exports.getShipments = getShipments;
//# sourceMappingURL=shipment.service.js.map