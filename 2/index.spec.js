"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("sumAllExceptIndex", () => {
    it("should return an array of the product of all numbers except the index", () => {
        const array = [1, 2, 3, 4, 5];
        const result = (0, _1.sumAllExceptIndex)(array);
        expect(result).toEqual([120, 60, 40, 30, 24]);
    });
});
