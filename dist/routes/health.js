"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.route("/").get((req, res) => {
    res.send({ message: "ok", timestamp: req.timestamp });
});
