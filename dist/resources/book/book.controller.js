"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksHandler = exports.createBookHandler = void 0;
const _1 = require(".");
const createBookHandler = async (req, res) => {
    try {
        const book = await (0, _1.createBook)(req.body);
        return res.send(book);
    }
    catch (e) {
        if (e &&
            e.code &&
            (e.code === 11000 || e.toString().contains("duplicate key"))) {
            return res.status(400).send("this book name already exist");
        }
        if (e && e.errors && e.errors.language) {
            return res.status(400).send(e.errors.language.message);
        }
        return res.status(500).send(e.message || e.toString());
    }
};
exports.createBookHandler = createBookHandler;
const getBooksHandler = async (req, res) => {
    try {
        const books = await (0, _1.getBooks)({
            limit: Number(req.query.size),
            skip: Number(req.query.page),
        }, req.params.select);
        return res.send({
            data: books,
            count: books.length,
        });
    }
    catch (e) {
        console.log(e);
        if (e && e.code && e.code === 51024) {
            return res.status(400).send("page number must be 0 or greater");
        }
        return res.status(400).send((e.message && e.message) || e.toString());
    }
};
exports.getBooksHandler = getBooksHandler;
//# sourceMappingURL=book.controller.js.map