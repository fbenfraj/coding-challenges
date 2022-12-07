import { sumAllExceptIndex } from ".";

describe("sumAllExceptIndex", () => {
  it("should return an array of the product of all numbers except the index", () => {
    const array: number[] = [1, 2, 3, 4, 5];

    const result: number[] = sumAllExceptIndex(array);

    expect(result).toEqual([120, 60, 40, 30, 24]);
  });
});
