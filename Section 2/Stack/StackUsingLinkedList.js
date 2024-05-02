class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return temp.val;
  }

  print() {
    let current = this.head;
    let listvalue = "";
    while (current) {
      listvalue += `${current.val} `;
      current = current.next;
    }
    console.log(listvalue);
  }
}

const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.print()
myStack.pop()
myStack.print()

