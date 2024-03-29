import { beforeAll, describe, it, expect } from "vitest";
import { resetCarsDatabase } from "../database/cars";
import { request } from "./setupFiles";
import { carDefaultExpects } from "./utils/carDefaultExpects";

describe("create car", () => {
   beforeAll(() => {
      resetCarsDatabase();
   });

   it("should be able to create a car correctly", async () => {
      const data = await request
         .post("/cars")
         .send({
            model: "Uno",
            km: 80000,
            year: 2017,
            brand: "Fiat",
            price: 40000,
         })
         .expect(200)
         .then((response) => response.body);

      carDefaultExpects(data);

      expect(data.km).toBeDefined();
      expect(data.km).toBeTypeOf("number");
   });

   it("should be able to create card without a km", async () => {
      const data = await request
         .post("/cars")
         .send({
            model: "Gol",
            year: 2018,
            brand: "Volkswagen",
            price: 40000,
         })
         .expect(200)
         .then((response) => response.body);

      carDefaultExpects(data);

      expect(data.km).toBeUndefined();
   });
});
