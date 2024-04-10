class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  AddToFirst(val) {
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

  AddToLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
    return;
  }

  AddToIndex(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      return false;
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
    node.next = curr.next;
    node.prev = curr;
    node.next.prev = node;
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

const list = new doublyLinkedlist();

list.AddToFirst(1);
list.AddToFirst(2);
list.AddToFirst(3);
list.AddToFirst(4);
list.print();
list.AddToLast(5);
list.print();
list.AddToIndex(10, 5);
list.print();
