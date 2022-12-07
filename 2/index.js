"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumAllExceptIndex = void 0;
function sumAllExceptIndex(arr) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        let tmpArray = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const value = tmpArray.reduce((a, b) => a * b);
        finalArray.push(value);
    }
    return finalArray;
}
exports.sumAllExceptIndex = sumAllExceptIndex;
