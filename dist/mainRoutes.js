"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
const routes = (app) => {
    app.get("/api", (_, res) => {
        res.send("working");
    });
    app.use("/api/user", routes_1.userRoutes);
    app.use("/api/book", middleware_1.requireUser, routes_1.bookRoutes);
    app.use("/api/shipment", middleware_1.requireUser, routes_1.shipmentRoutes);
    app.use("/api/shipmentItem", middleware_1.requireUser, routes_1.shipmentItemRoutes);
    app.use("/api/order", middleware_1.requireUser, routes_1.orderRoutes);
    app.use("/api/customer", middleware_1.requireUser, routes_1.customerRoutes);
    app.use("/api/static", middleware_1.requireUser, routes_1.staticRoutes);
};
exports.routes = routes;
//# sourceMappingURL=mainRoutes.js.map