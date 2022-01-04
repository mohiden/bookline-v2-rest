"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.createBook = void 0;
const _1 = require(".");
const createBook = (input) => {
    return _1.BookModel.create(input);
};
exports.createBook = createBook;
const getBooks = (options = { lean: true }, select, search) => {
    return _1.BookModel.find(search ? { name: { $regex: '.*' + search + '.*' } } : {}, {}, options).select(select).exec();
};
exports.getBooks = getBooks;
//# sourceMappingURL=book.service.js.map