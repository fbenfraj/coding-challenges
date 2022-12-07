"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("checkSumEqualTarget", () => {
    it("should return true if there are two numbers in the array that add up to k", () => {
        const array = [10, 15, 3, 7];
        const k = 17;
        const result = (0, index_1.checkSumEqualTarget)(array, k);
        expect(result).toEqual(true);
    });
    it("should return false if there are no two numbers in the array that add up to k", () => {
        const array = [10, 15, 3, 7];
        const k = 20;
        const result = (0, index_1.checkSumEqualTarget)(array, k);
        expect(result).toEqual(false);
    });
});
