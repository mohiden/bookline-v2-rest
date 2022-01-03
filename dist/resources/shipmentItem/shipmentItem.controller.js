"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipmentItemsHandler = exports.createShipmentItemHandler = void 0;
const _1 = require(".");
const __1 = require("..");
const createShipmentItemHandler = async (req, res) => {
    console.log(req.body);
    try {
        const shipment = await __1.ShipmentModel.findOne({ _id: req.body.shipment });
        if (!shipment)
            throw new Error("Shipment was not found");
        return res.send(await (0, _1.createShipmentItem)(req.body));
    }
    catch (e) {
        console.log(e);
        return res.status(400).send((e.message && e.message) || e.toString());
    }
};
exports.createShipmentItemHandler = createShipmentItemHandler;
const getShipmentItemsHandler = async (req, res) => {
    try {
        return res.send(await (0, _1.getShipmentItems)({
            skip: Number(req.query.page),
            limit: Number(req.query.size),
        }, req.params.select));
    }
    catch (e) {
        console.log(e);
        return res.status(400).send((e.message && e.message) || e.toString());
    }
};
exports.getShipmentItemsHandler = getShipmentItemsHandler;
//# sourceMappingURL=shipmentItem.controller.js.map