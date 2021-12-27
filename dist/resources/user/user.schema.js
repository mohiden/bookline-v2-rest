"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "username must not be empty",
        })
            .min(5, "username too short!")
            .max(100, { message: "too large" }),
        password: (0, zod_1.string)({
            required_error: "password must not be empty",
        }).min(5, "password too short!"),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "passwordConfirmation must not be empty",
        }),
    }).refine((data) => {
        return data.password === data.passwordConfirmation;
    }, {
        message: "Password doesn't match",
        path: ["password Confirmation"],
    }),
});
exports.loginUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "username must not be empty",
        })
            .min(5, "username too short!")
            .max(100, { message: "too large" }),
        password: (0, zod_1.string)({
            required_error: "password must not be empty",
        }).min(5, "password too short!"),
    }),
});
//# sourceMappingURL=user.schema.js.map