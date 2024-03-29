import { describe, it, expect, beforeAll } from "vitest";
import { carsDatabase } from "../database/cars";
import { firstCar, secondCar } from "./__mocks/cars";
import { request } from "./setupFiles";
import { carDefaultExpects } from "./utils/carDefaultExpects";
import { errorDefaultExpects } from "./utils/errorDefaultExpects";

const updateData = {
   km: 120000,
   price: 32000,
};

describe("update car", () => {
   beforeAll(() => {
      carsDatabase.push(firstCar());
   });

   it("should be able do update a car sucessfully", async () => {
      const data = await request
         .patch("/cars/1")
         .send(updateData)
         .expect(200)
         .then((response) => response.body);

      carDefaultExpects(data);

      expect(data.km).toBe(updateData.km);
      expect(data.price).toBe(updateData.price);
   });

   it("should throw error when the id is incorrect", async () => {
      const data = await request
         .patch("/cars/2")
         .send(updateData)
         .expect(404)
         .then((response) => response.body);

      errorDefaultExpects(data);
   });
});
