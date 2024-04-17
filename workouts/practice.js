class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  size() {
    return this.size();
  }

  addToFirst(val) {
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
  addToLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  addToIndexWise(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      console.log(false);
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    return;
  }
  removeTop() {
    if (!this.head) {
      console.log(false);
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      console.log(false);
    }
    let curr = this.head;

    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      console.log(false);
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  removeFromValuewise(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }
    let prev;
    let curr = this.head;
    while (curr.val !== val) {
      prev = curr;
      curr = curr.next;
      if (curr === null) {
        console.log(false);
        return
      }
    }

    
    prev.next = curr.next;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr.prev = next;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    while (i != index) {
      curr = curr.next;
      i++;
    }
    // return curr.val; //getting the value
    return curr;
  }

  set(index, val) {
    let foundValue = this.get(index);
    if (foundValue) {
      foundValue.val = val;
      return true;
    }
    return false;
  }

  removeDuplicates() {
    let curr = this.head;
    let prev = null;
    const arr = [];
    while (curr !== null) {
      if (arr.includes(curr.val)) {
        prev.next = curr.next;
      } else {
        arr.push(curr.val);
        prev = curr;
      }
      curr = curr.next;
    }
  }

  print() {
    if (this.size > 0) {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.val} `;
        curr = curr.next;
      }
      console.log(listValues);
    } else {
      console.log("list is empty");
    }
  }
}

const list = new linkedList();

list.addToFirst(1);
list.addToFirst(2);
list.addToFirst(3);
list.addToFirst(4);
list.addToFirst(5);
list.addToFirst(6);

// list.print();
// list.print();
// list.addToIndexWise(10, 5);
// list.print();
// list.removeTop();
// list.print();
// list.removeLast();
list.addToLast(7);
list.print();

// list.removeDuplicates();
// list.removeFromIndex(1);
list.print();
// // console.log(list.removeFromValuewise(3));
list.removeFromValuewise(6
);
// // console.log("after removing all");
list.print();
// // list.removeAll();
// // console.log("before removing all");
// list.reverse();
// list.print();
// console.log(list.get(2));
// list.print();
// console.log(list.set(0, 1));

// console.log(list.size);
// list.print();
