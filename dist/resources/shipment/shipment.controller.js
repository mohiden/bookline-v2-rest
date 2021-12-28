"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShipmentHandler = void 0;
const _1 = require(".");
const createShipmentHandler = async (req, res) => {
    try {
        const shipment = await (0, _1.createShipment)(Object.assign(Object.assign({}, req.body), { createdBy: res.locals.user["_id"] }));
        return res.send(shipment);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
};
exports.createShipmentHandler = createShipmentHandler;
//# sourceMappingURL=shipment.controller.js.map