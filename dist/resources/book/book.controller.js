"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookHandler = void 0;
const _1 = require(".");
const createBookHandler = async (req, res) => {
    try {
        console.log("USER:", res.locals.user);
        const book = await (0, _1.createBook)(req.body);
        return res.send(book);
    }
    catch (e) {
        if (e.code === 11000 || e.toString().contains("duplicate key")) {
            return res.status(400).send("this book name is used");
        }
        return res.status(500).send(e);
    }
};
exports.createBookHandler = createBookHandler;
//# sourceMappingURL=book.controller.js.map