"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserHandler = exports.createUserHandler = void 0;
const _1 = require(".");
const createUserHandler = async (req, res) => {
    try {
        const user = await (0, _1.createUser)(req.body);
        return res.send(user);
    }
    catch (e) {
        if (e.code === 11000 || e.toString().contains("duplicate key")) {
            return res.status(400).send("this username is taken");
        }
        return res.status(500).send(e.message);
    }
};
exports.createUserHandler = createUserHandler;
const loginUserHandler = async (req, res) => {
    try {
        const token = await (0, _1.loginUser)(req.body);
        return res.send(token);
    }
    catch (e) {
        if (e.message) {
            return res.status(400).send(e.message);
        }
        return res
            .status(500)
            .send("Something wen't wrong, please try again later!");
    }
};
exports.loginUserHandler = loginUserHandler;
//# sourceMappingURL=user.controller.js.map