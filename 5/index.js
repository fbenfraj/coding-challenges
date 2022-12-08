"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cdr = exports.car = exports.cons = void 0;
function cons(num1, num2) {
    const pair = {
        num1,
        num2,
    };
    return pair;
}
exports.cons = cons;
function car(pair) {
    return pair.num1;
}
exports.car = car;
function cdr(pair) {
    return pair.num2;
}
exports.cdr = cdr;
