import express from "express";
import { calculatorRouter, healthRouter } from "./routes";
import { addTimeStamp, errorHandler, logger } from "./middleware";
const app = express();

const port = 3000;

app.use(express.json())
app.use(logger)
app.use(addTimeStamp)

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);




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



app.use(errorHandler)
app.listen(port, () => {
  console.log(`app listening at port:${port}`);
});
