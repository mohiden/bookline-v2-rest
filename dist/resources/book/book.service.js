"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.createBook = void 0;
const _1 = require(".");
const createBook = (input) => {
    return _1.BookModel.create(input);
};
exports.createBook = createBook;
const getBooks = (options = { lean: true }, select) => {
    return _1.BookModel.find({}, {}, options).select(select);
};
exports.getBooks = getBooks;
//# sourceMappingURL=book.service.js.map