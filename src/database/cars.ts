import { ICar } from './cars.interface';

export const carsDatabase: ICar[] = [];

let id = 0;

export const generateCarsId = () => id++;
export const resetCarsDatabase = () => {
  carsDatabase.length = 0;
};
