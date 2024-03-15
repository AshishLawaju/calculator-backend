"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
}
exports.errorHandler = errorHandler;
