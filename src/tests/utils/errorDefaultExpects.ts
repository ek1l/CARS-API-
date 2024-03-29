import { expect } from "vitest";

export const errorDefaultExpects = (data: { error: string }) => {
   expect(data).toBeTypeOf("object");

   expect(data.error).toBeDefined();
   expect(data.error).toBeTypeOf("string");
};
