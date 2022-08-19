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

test.skip('binary tree adds', () => {
  const B = new BinaryTreeNode('2');
  const A = new BinaryTreeNode('1');
  const C = new BinaryTreeNode('3');
  const D = new BinaryTreeNode('4');
  B.add(1);
  B.add(4);
  B.add(3);
});

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
  }

  findPerson(name) {
    // Implement me!
  }
}

test.skip('person tree node add and find', () => {});

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

  getList() {
    if (!this.next) return this.value;
    return `${this.value} ${this.next.getList()}`;
  }
}

test.skip('linkedList add', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  const nodeE = new LinkedListNode('E');
  root.add(nodeB);
  root.add(nodeC);
  root.add(nodeD);
  root.add(nodeE);
});

test('linkedList get', () => {
  const root = new LinkedListNode('A');
  const nodeB = new LinkedListNode('B');
  const nodeC = new LinkedListNode('C');
  const nodeD = new LinkedListNode('D');
  const nodeE = new LinkedListNode('E');
  expect(root.getList()).toBe('A');
  root.add(nodeB);
  expect(root.getList()).toBe('A B');
  root.add(nodeC);
  expect(root.getList()).toBe('A B C');
  root.add(nodeD);
  expect(root.getList()).toBe('A B C D');
  root.add(nodeE);
  expect(root.getList()).toBe('A B C D E');
});
