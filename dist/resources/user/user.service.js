"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const utils_1 = require("../../utils");
const _1 = require(".");
const lodash_1 = require("lodash");
const createUser = (input) => {
    return _1.UserModel.create(input);
};
exports.createUser = createUser;
const loginUser = async (input) => {
    const e = "Invalid username/password";
    const user = await _1.UserModel.findOne({ username: input.username });
    if (!user)
        throw new Error(e);
    const isMatch = await user.comparePassword(input.password);
    if (!isMatch)
        throw new Error(e);
    const token = (0, utils_1.signJwt)((0, lodash_1.omit)(user.toJSON(), "password"), {
        expiresIn: "365d",
    });
    return token;
};
exports.loginUser = loginUser;
//# sourceMappingURL=user.service.js.map