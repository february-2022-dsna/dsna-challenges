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

  remove(value) {
    if (!this.next) return;
    if (this.next.value === value) {
      this.next = this.next.next;
    } else {
      this.next.remove(value);
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

test('linked list getList', () => {
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

test('linked list remove', () => {
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