"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResource = void 0;
const validateResource = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (e) {
        console.log("ZOD:", e);
        return res.status(400).send(e.errors);
    }
};
exports.validateResource = validateResource;
//# sourceMappingURL=validateResource.js.map