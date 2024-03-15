import { Router ,Request} from "express";

const router = Router();

router.route("/").get((req:Request, res) => {
  res.send({message:"ok" , timestamp:req.timestamp});
});
export { router };
