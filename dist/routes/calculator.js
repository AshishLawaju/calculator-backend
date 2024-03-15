"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
exports.router = router;
router.use(middleware_1.logger);
router.get("/", middleware_1.logger, (req, res) => {
    res.send({
        message: "Get all calculation",
    });
});
router.get("/:id", (req, res) => {
    res.send({
        message: `Get all calculation ${req.params.id}`,
    });
});
// {} parameter type  any response body
router.post("/", middleware_1.validateCalculatorRequest, (req, res) => {
    //   console.log(req.body);
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            result = "Invalid operator";
            break;
    }
    res.json({ result });
});
