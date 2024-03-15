//middleware

import { NextFunction, Request, Response } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.timestamp} ${req.method} ${req.ip} ${req.originalUrl} `);
  next();
}

/* app.use((req, res, next) => {
    res.send("app use middleware");
    console.log(`${req.method} ${req.ip} ${req.originalUrl} `);
    next();
  });
   */
