"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("Pair functions test: const car cdr", () => {
    it("should return the first number of the pair", () => {
        const result = (0, index_1.car)((0, index_1.cons)(3, 4));
        expect(result).toEqual(3);
    });
    it("should return the second number of the couple", () => {
        const result = (0, index_1.cdr)((0, index_1.cons)(3, 4));
        expect(result).toEqual(4);
    });
});
