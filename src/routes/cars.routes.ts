import { Router } from 'express';
import { CarsControllers } from '../controllers/cars.controllers';
import { IsCardValid } from '../middleware/isCardValid.middleware';

export const carsRouter = Router();
const carsControllers = new CarsControllers();
carsRouter.post('/', carsControllers.create);
carsRouter.get('/', carsControllers.getMany);
carsRouter.get('/:id', IsCardValid.execute, carsControllers.getOne);
carsRouter.patch('/:id', IsCardValid.execute, carsControllers.update);
carsRouter.delete('/:id', IsCardValid.execute, carsControllers.delete);
