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

export default CustomNode;
