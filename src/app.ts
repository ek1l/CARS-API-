import 'express-async-errors';
import express, { json } from 'express';
import { carsRouter } from './routes/cars.routes';
import { handleErrors } from './errors/handleErrors.middleware';

export const app = express();

app.use(json());

app.use('/cars', carsRouter);

app.use(handleErrors.execute);
