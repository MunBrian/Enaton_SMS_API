import { Request, Response, NextFunction } from "express";

//override default express error handler
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
  });
};

export default errorHandler;
