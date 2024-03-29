import { beforeAll, describe, it } from "vitest";
import { carsDatabase } from "../database/cars";
import { firstCar } from "./__mocks/cars";
import { request } from "./setupFiles";
import { errorDefaultExpects } from "./utils/errorDefaultExpects";

describe("delete car", async () => {
   beforeAll(() => {
      carsDatabase.push(firstCar());
   });

   it("should be able to delete a car sucessfully", () => {
      request.delete("/cars/1");
   });

   it("should throw error when the id is incorrect", async () => {
      const data = await request
         .delete("/cars/2")
         .expect(404)
         .then((response) => response.body);

      errorDefaultExpects(data);
   });
});
