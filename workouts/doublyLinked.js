class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
} 
class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  size() {
    return this.size;
  }

  AddFirst(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
  }
  AddLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
    return;
  }

  AddIndexWise(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      console.log(false);
      return;
    }

    if (index === 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.prev = curr;
    node.next = curr.next;
    curr.next.prev = node;
    curr.next = node;
    return;
  }
  print() {
    if (this.size > 0) {
      let curr = this.head;
      let listvalues = "";
      while (curr) {
        listvalues += `${curr.val} `;
        curr = curr.next;
      }
      console.log(listvalues);
    } else {
      console.log("list is empty");
    }
  }
}

const list = new doublyLinkedList();
list.AddFirst(1);
list.AddFirst(2);
list.AddFirst(3);
list.AddFirst(4);
list.AddFirst(5);
list.AddFirst(6);
list.print();
list.AddIndexWise(10, 5);
list.print();
