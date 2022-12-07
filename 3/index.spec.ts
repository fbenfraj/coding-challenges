import CustomNode from ".";

const myNode: CustomNode = new CustomNode(
  "root",
  new CustomNode("left", new CustomNode("left.left")), //root.left
  new CustomNode("right") //root.right
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
