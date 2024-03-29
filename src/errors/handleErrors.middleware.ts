import { Request, Response } from 'express';
import { AppError } from './appError';

export class handleErrors {
  static execute(err: Error, req: Request, res: Response) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.message,
      });
    } else {
      console.log(err);
      return res.status(500).json({
        error: 'Internal server error',
      });
    }
  }
}
