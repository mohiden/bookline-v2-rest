"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = void 0;
function requireUser(_, res, next) {
    const user = res.locals.user;
    if (!user)
        return res.sendStatus(401);
    return next();
}
exports.requireUser = requireUser;
//# sourceMappingURL=requireUser.js.map