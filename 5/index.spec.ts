import { cons, car, cdr } from "./index";

describe("Pair functions test: const car cdr", () => {
  it("should return the first number of the pair", () => {
    const result: number = car(cons(3, 4));

    expect(result).toEqual(3);
  });
  it("should return the second number of the couple", () => {
    const result: number = cdr(cons(3, 4));

    expect(result).toEqual(4);
  });
});
