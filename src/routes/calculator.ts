import { Request, Response, Router } from "express";
import { logger, validateCalculatorRequest } from "../middleware";
import { CalculatorRequestBody } from "../types";

const router = Router();

router.use(logger);

router.get("/", logger, (req, res) => {
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
router.post(
  "/",
  validateCalculatorRequest,
  (req: Request<{}, any, CalculatorRequestBody>, res: Response) => {
    //   console.log(req.body);

    const { operator, operand1, operand2 } = req.body;

    let result: number | string;
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
  }
);
export { router };
