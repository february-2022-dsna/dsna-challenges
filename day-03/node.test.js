const node3 = {
    value: 4,
    next: null,
  };
  
  const node2 = {
    value: 12,
    next: node3,
  };
  
  const node1 = {
    value: 34,
    next: node2,
  };
  
  class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  
    add(node) {
      if (!this.next) this.next = node;
      else {
        this.next.add(node);
      }
    }
  }
  
  test('linked list adds', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');

    root.add(nodeB);
    root.add(nodeC);
    root.add(nodeD);
  
    expect(root.next).toBe(nodeB);
    expect(nodeB.next).toBe(nodeC);
    expect(nodeC.next).toBe(nodeD);
    expect(nodeD.next).toBe(null);
  });
  
  // console.log(root.getList()); // 'A B'
  // const nodeC = new LinkedListNode('C');
  // const nodeD = new LinkedListNode('D');
  // const nodeE = new LinkedListNode('E');
  // root.add(nodeC);
  // root.add(nodeD);
  // root.add(nodeE);
  // console.log(root.getList()); // 'A B C D E'
  
 
  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        if(this.value > node.value){
            if(!this.left) {this.left = node} else {this.left.add(node)};
        } else {
            if(!this.right) {this.right = node} else {this.right.add(node)};
        }
    }
  }

  test.only('binary tree', () => {
    const B = new BinaryTreeNode(2);
    const A = new BinaryTreeNode(1);
    const C = new BinaryTreeNode(3);
    const D = new BinaryTreeNode(4);

    B.add(A);
    B.add(D);
    B.add(C);
  
    console.log(A.value)

    expect(B.left).toBe(A);
    expect(B.right).toBe(D);
    expect(A.left).toBe(null);
    expect(C.left).toBe(null);
  });
//   class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.children = [];
//     }
  
//     add(node) {}
//   }
  