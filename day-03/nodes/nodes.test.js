// ------------------------------ 1 - BINARY NODE ADD -----------------

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        return this.left.add(node);
      } else {
        this.left = node;
      }
    }
    if (node.value >= this.value) {
      if (this.right) {
        return this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }
}

test.only('binary add node', () => {
  const B = new BinaryTreeNode('B');
  const A = new BinaryTreeNode('A');
  const C = new BinaryTreeNode('C');
  const D = new BinaryTreeNode('D');
  B.add(A);
  B.add(D);
  B.add(C);
  expect(B.left).toBe(A);
  expect(B.right).toBe(D);
});
