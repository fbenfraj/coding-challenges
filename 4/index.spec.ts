import findLowestPositive from ".";

describe("findLowestPositive", () => {
  it("should return the lowest positive integer that is not in the array", () => {
    const testArray1 = [3, 4, -1, 1];
    const testArray2 = [1, 2, 0];

    const result1: number = findLowestPositive(testArray1);
    const result2: number = findLowestPositive(testArray2);

    expect(result1).toEqual(2);
    expect(result2).toEqual(3);
  });
});
