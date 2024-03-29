import { NextFunction, Request, Response } from 'express';
import { carsDatabase } from '../database/cars';
import { AppError } from '../errors/appError';

export class IsCardValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (!carsDatabase.some((car) => car.id === Number(req.params.id))) {
      throw new AppError('Car not found!', 404);
    }

    next();
  }
}
