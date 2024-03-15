import { Request, Response, NextFunction } from "express";
import { CalculatorRequestBody } from "../types";

export function validateCalculatorRequest(
  req: Request<{}, any, CalculatorRequestBody>,
  res: Response,
  next: NextFunction
) {
  const { operator, operand1, operand2 } = req.body;

  if (typeof operand1 !== "number" || typeof operand2 !== "number") {
    return res.status(400).send("operands must be numbers");
  }

  if (
    operator !== "+" &&
    operator !== "*" &&
    operator !== "-" &&
    operator !== "/"
  ) {
    return res.status(400).send("operator  must be + - * /");
  }
  next();
}
