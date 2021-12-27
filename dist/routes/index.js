"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.bookRoutes = exports.orderRoutes = void 0;
const order_routes_1 = require("./order.routes");
Object.defineProperty(exports, "orderRoutes", { enumerable: true, get: function () { return order_routes_1.router; } });
const book_routes_1 = require("./book.routes");
Object.defineProperty(exports, "bookRoutes", { enumerable: true, get: function () { return book_routes_1.router; } });
const user_routes_1 = require("./user.routes");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return user_routes_1.router; } });
//# sourceMappingURL=index.js.map