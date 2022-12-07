"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
describe("findLowestPositive", () => {
    it("should return the lowest positive integer that is not in the array", () => {
        const testArray1 = [3, 4, -1, 1];
        const testArray2 = [1, 2, 0];
        const result1 = (0, _1.default)(testArray1);
        const result2 = (0, _1.default)(testArray2);
        expect(result1).toEqual(2);
        expect(result2).toEqual(3);
    });
});
