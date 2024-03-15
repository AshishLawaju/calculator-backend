"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(middleware_1.logger);
app.use(middleware_1.addTimeStamp);
app.use("/health", routes_1.healthRouter);
app.use("/calculator", routes_1.calculatorRouter);
/*
app.get("/:id", (req, res) => {
  console.log(`Query parameter : ${JSON.stringify(req.query)}`);
  console.log(`Headers : ${JSON.stringify(req.headers)}`);
  console.log(`Method : ${req.method} `);

  //request params /asjosj    :id
  //query params /ahsihs?age=15  ?age=15

  res
    .status(202)
    .header({ "X-Customer_Header": "la coutom header" })
    .send(`hello ${req.params.id}`);
}); */
app.use(middleware_1.errorHandler);
app.listen(port, () => {
    console.log(`app listening at port:${port}`);
});
