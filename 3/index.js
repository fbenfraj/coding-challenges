"use strict";
class CustomNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const myNode = new CustomNode("root", new CustomNode("left", new CustomNode("left.left")), //root.left
new CustomNode("right") //root.right
);
const stringified = JSON.stringify(myNode);
const parsed = JSON.parse(stringified);
console.log(parsed.left.left.val);
