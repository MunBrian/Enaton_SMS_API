"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//override default express error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
    });
};
exports.default = errorHandler;
