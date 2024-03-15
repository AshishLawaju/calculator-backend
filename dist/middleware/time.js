"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimeStamp = void 0;
const addTimeStamp = (req, res, next) => {
    req.timestamp = Date.now();
    next(null);
};
exports.addTimeStamp = addTimeStamp;
