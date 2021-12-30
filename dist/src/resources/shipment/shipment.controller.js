"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipmentsHandler = exports.createShipmentHandler = void 0;
const _1 = require(".");
const createShipmentHandler = async (req, res) => {
    try {
        const shipment = await (0, _1.createShipment)(Object.assign(Object.assign({}, req.body), { createdBy: res.locals.user["_id"] }));
        return res.send(shipment);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send((e.message && e.message) || e.toString());
    }
};
exports.createShipmentHandler = createShipmentHandler;
const getShipmentsHandler = async (req, res) => {
    try {
        const shipments = await (0, _1.getShipments)({
            limit: Number(req.query.size),
            skip: Number(req.query.page),
        }, req.params.select);
        return res.send(shipments);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send(e.toString());
    }
};
exports.getShipmentsHandler = getShipmentsHandler;
//# sourceMappingURL=shipment.controller.js.map