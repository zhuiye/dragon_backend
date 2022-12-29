import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
    
  console.log(`RequestHeader:`,req.headers);
  console.info(`RequestQuery:`,req.query);
  console.info(`RequestBody:`,req.body);

  next();
};