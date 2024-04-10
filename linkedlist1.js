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

  addToFirst(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
  }

  addTolast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
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
    curr.next = node;
    this.size++;
    return;
  }

  AddToValue(val, value) {
    const node = new Node(val);
    if (this.head.val === value) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < value - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return this.head;
  }

  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    return;
  }

  removeFromValue(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }

    let prev;
    let curr = this.head;
    while (curr.val !== val) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    return;
  }

  get(index) {
    let curr = this.head;
    let i = 0;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
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

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  removeDuplicates() {
    let prev;
    let curr = this.head;
    let arr = [];
    let remove=[]
    let count=0
    while (curr !== null) {
      if (arr.includes(curr.val)) {
        prev.next = curr.next;
        remove.push(curr.val)
        count++;
      } else {
        arr.push(curr.val);
        prev = curr;
      }
      curr = curr.next;
    }
    return remove;
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

const list = new linkedList();

list.addToFirst(1);
list.addToFirst(2);
list.addToFirst(3);
list.addToFirst(4);
list.addToFirst(5);
list.addToFirst(6);
list.print();
list.addTolast(7);
list.print();
list.AddToIndex(10, 6);
list.print();
// console.log(list.AddToValue(11, 7));
list.removeFromIndex(2);
list.print();
list.removeFromValue(10);
list.print();
list.set(3, 10);
list.print();
list.reverse();
list.print();
list.addToFirst(6);
list.addToFirst(5);
list.print();
list.removeDuplicates();
list.print();
list.addToFirst(5);
list.print();
console.log(list.removeDuplicates());
list.print();
