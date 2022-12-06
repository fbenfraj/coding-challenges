class CustomNode {
  val: string;
  left?: CustomNode;
  right?: CustomNode;
  constructor(val: string, left?: CustomNode, right?: CustomNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const myNode: CustomNode = new CustomNode(
  "root",
  new CustomNode("left", new CustomNode("left.left")), //root.left
  new CustomNode("right") //root.right
);

const stringified = JSON.stringify(myNode);
const parsed = JSON.parse(stringified);

console.log(parsed.left.left.val);
