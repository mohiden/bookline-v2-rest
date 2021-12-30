"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const makeConnection = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.get("dbUri"));
        console.log("Connected to DB.");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
};
exports.makeConnection = makeConnection;
//# sourceMappingURL=index.js.map