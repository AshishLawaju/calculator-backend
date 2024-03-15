
import { Request,Response,NextFunction } from "express";

const addTimeStamp = (req:Request,res:Response,next:NextFunction)=>{
    req.timestamp = Date.now()
    next(null)

}

export {addTimeStamp}