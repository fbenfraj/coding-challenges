"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSumEqualTarget = void 0;
function checkSumEqualTarget(arr, k) {
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                console.log(`Found: ${arr[i]} + ${arr[j]} = ${k}`);
                check = true;
            }
        }
    }
    return check;
}
exports.checkSumEqualTarget = checkSumEqualTarget;
