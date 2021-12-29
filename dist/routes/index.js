"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipmentItemRoutes = exports.orderRoutes = exports.shipmentRoutes = exports.userRoutes = exports.bookRoutes = void 0;
const book_routes_1 = __importDefault(require("./book.routes"));
exports.bookRoutes = book_routes_1.default;
const user_routes_1 = __importDefault(require("./user.routes"));
exports.userRoutes = user_routes_1.default;
const shipment_routes_1 = __importDefault(require("./shipment.routes"));
exports.shipmentRoutes = shipment_routes_1.default;
const order_routes_1 = __importDefault(require("./order.routes"));
exports.orderRoutes = order_routes_1.default;
const shipmentItem_routes_1 = __importDefault(require("./shipmentItem.routes"));
exports.shipmentItemRoutes = shipmentItem_routes_1.default;
//# sourceMappingURL=index.js.map