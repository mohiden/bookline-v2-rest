"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const database_1 = require("./database");
const mainRoutes_1 = require("./mainRoutes");
const middleware_1 = require("./middleware");
async function main() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(middleware_1.deserializeUser);
    await (0, database_1.makeConnection)();
    app.listen(config_1.default.get("port"), () => {
        console.log("Running!");
        (0, mainRoutes_1.routes)(app);
    });
}
main().catch((err) => console.log("ERROR:", err));
//# sourceMappingURL=index.js.map