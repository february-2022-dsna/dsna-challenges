class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }

    add(node){
        if(!this.next) return node;
        this.next.add(node);
    }

    getList() {
        if(!this.next) return this.value;
        return `${this.value} ${this.next.getList()}`;
    }

    remove(node){
        if(!this.next) return;
        if(this.next.node === node){
            this.next = this.next.next;
        } else {
            this.next.remove(node);
        }
    }
}

test('linkedlistnode test', () => {
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeB);
expect(nodeB.getList()).toEqual(['A B']);
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
// console.log(root.getList()); // 'A B C D E'
const subtraction = root.remove(1);
console.log('subtraction', subtraction);
// console.log(root.getList()); // 'A C D E'
})



class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    //constructor to get value and set root
    constructor(val){
      this.root = new BinaryTreeNode(val);  
    }
    //creating an add function which adds new nodes to the tree
    add(node){
        //set first node as the root node
        const newNode = new BinaryTreeNode(node);
        //if the root node is set compare root and new node and determine which
        //side to push new node to
        if(this.root === null ){
            this.root = newNode
        } else {
            //created function to compare nodes
            this.createNode(this.root, newNode);
        }
    }
    //new function that compares nodes
    createNode(current, newNode){
        //if new node is larger than old node set right to new node
        if(newNode.value > current.value){
        //if that node is empty place new node there else restart the function
            if (current.right === null){
                current.right = newNode;
            } else {
                this.insertNode
            }
        }
    }

}

// test('binary node Add', () => {
//     const B = new BinaryTreeNode('B');
// const A = new BinaryTreeNode('A');
// const C = new BinaryTreeNode('C');
// const D = new BinaryTreeNode('D');
// B.add(A);
// B.add(D);
// B.add(C);
// })

