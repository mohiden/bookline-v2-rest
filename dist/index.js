"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const mainRoutes_1 = require("./mainRoutes");
const middleware_1 = require("./middleware");
const cors_1 = __importDefault(require("cors"));
async function main() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: ['http://localhost:3000', 'https://booklinev2-web.pages.dev'],
    }));
    app.use(express_1.default.json());
    app.use(middleware_1.deserializeUser);
    await (0, database_1.makeConnection)();
    app.listen(process.env.PORT || 1337, () => {
        console.log("Running!");
        (0, mainRoutes_1.routes)(app);
    });
}
main().catch((err) => console.log("ERROR:", err));
//# sourceMappingURL=index.js.map