import { expect } from "vitest";
import { Car } from "../__mocks/cars";

export const carDefaultExpects = (car: Car) => {
   const date = new Date();
   const year = date.getFullYear();

   expect(car).toBeTypeOf("object");

   expect(car.id).toBeDefined();
   expect(car.id).toBeTypeOf("number");

   expect(car.model).toBeDefined();
   expect(car.model).toBeTypeOf("string");

   expect(car.year).toBeDefined();
   expect(car.year).toBeTypeOf("number");

   expect(car.brand).toBeDefined();
   expect(car.brand).toBeTypeOf("string");

   expect(car.price).toBeDefined();
   expect(car.price).toBeTypeOf("number");

   expect(car.createdAt).toBeDefined();
   expect(String(car.createdAt)).toContain(year);

   expect(car.updatedAt).toBeDefined();
   expect(String(car.createdAt)).toContain(year);
};
