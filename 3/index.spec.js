"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const myNode = new _1.default("root", new _1.default("left", new _1.default("left.left")), //root.left
new _1.default("right") //root.right
);
const stringified = JSON.stringify(myNode);
const parsed = JSON.parse(stringified);
describe("CustomNode", () => {
    test("JSON.stringify and JSON.parse", () => {
        expect(parsed.val).toEqual("root");
        expect(parsed.left.val).toEqual("left");
        expect(parsed.left.left.val).toEqual("left.left");
        expect(parsed.right.val).toEqual("right");
    });
});
