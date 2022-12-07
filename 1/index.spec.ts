import { checkSumEqualTarget } from "./index";

describe("checkSumEqualTarget", () => {
  it("should return true if there are two numbers in the array that add up to k", () => {
    const array: number[] = [10, 15, 3, 7];
    const k: number = 17;

    const result = checkSumEqualTarget(array, k);

    expect(result).toEqual(true);
  });

  it("should return false if there are no two numbers in the array that add up to k", () => {
    const array: number[] = [10, 15, 3, 7];
    const k: number = 20;

    const result = checkSumEqualTarget(array, k);

    expect(result).toEqual(false);
  });
});
