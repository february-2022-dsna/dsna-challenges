class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Implement me!
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    }
  }
}

test('binary tree', () => {
  const B = new BinaryTreeNode('B');
  const A = new BinaryTreeNode('A');
  const C = new BinaryTreeNode('C');
  const D = new BinaryTreeNode('D');

  B.add(A);
  B.add(D);
  B.add(C);

  console.log(B);

  expect(B.left).toBe(A);
  expect(B.right).toBe(D);
  expect(A.left).toBe(null);
  expect(C.left).toBe(null);
});
