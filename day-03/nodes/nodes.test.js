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

test('binary add node', () => {
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

// ------------------------------ 2 - LINKED LIST (ADD, GETLIST, REMOVE) -----------------

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

  //TIME COMPLEXITY - O(1) or O(n) - if inserting element to the beginning or end of the list, runtime will be O(1). If inserting element anywhere in the list, runtime will be O(n)

  getList() {
    if (!this.next) return this.value;
    return `${this.value} ${this.next.getList()}`;
  }

  //TIME COMPLEXITY - O(n) - searching for any element from the list has a runtime of O(n)

  remove(value) {
    if (!this.next) return this.value;
    if (this.next.value === value) {
      this.next = this.next.next;
    } else {
      this.next.remove(value);
    }
  }

  //TIME COMPLEXITY - O(1) or O(n) - If removing element from beginning of the list or end of the list, runtime will be O(1). If removing element from beginning, runtime will be O(n)
}

test('adding node to linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);
  expect(root.next).toBe(nodeB);
});

test('getting list in linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  expect(root.getList()).toBe('A');
  root.add(nodeB);
  expect(root.getList()).toBe('A B');
  root.add(nodeC);
  expect(root.getList()).toBe('A B C');
  root.add(nodeD);
  expect(root.getList()).toBe('A B C D');
});

test.only('removing from linked list', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);
  root.remove('C');
  expect(root.getList()).toBe('A B D');
});
