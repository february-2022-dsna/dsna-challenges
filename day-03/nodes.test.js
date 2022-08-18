class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    const newNode = new BinaryTreeNode(node);
    if (this.B === null) {
      this.B === newNode;
      return this;
    }
    let current = this.B;
    while (current) {
      if (node === current.node) return undefined;
      if (node < current.node) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

test('binary tree adds', () => {
  const B = new BinaryTreeNode('2');
  const A = new BinaryTreeNode('1');
  const C = new BinaryTreeNode('3');
  const D = new BinaryTreeNode('4');
  B.add(1);
  B.add(4);
  B.add(3);
});
