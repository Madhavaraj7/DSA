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
    return this.size;
  }

  AddtoFirst(val) {
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

  AddtoLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertIndexWise(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      console.log(false);
      return;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    return;
  }

  removeFromFirst() {
    if (!this.head) {
      console.log(false);
    }
    this.head = this.head.next;
  }

  removeFromLast() {
    if (!this.head) {
      console.log(false);
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  removeFromindexWise(index) {
    if (index < 0 || index > this.size) {
      console.log(false);
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

  removeFromValueWise(val) {
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

  removeDublicate() {
    let prev;
    let curr = this.head;
    let arr = [];

    while (curr !== null) {
      if (arr.includes(curr.val)) {
        prev.next = curr.next;
      } else {
        arr.push(curr.val);
        prev = curr;
      }
    }
    curr = curr.next;
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
list.AddtoFirst(1);
list.AddtoFirst(2);
list.AddtoFirst(3);
list.AddtoFirst(4);
list.AddtoFirst(5);
list.AddtoFirst(6);
list.print();
list.AddtoLast(0);
list.print();
list.insertIndexWise(7, 0);
list.print();
list.removeFromFirst();
list.print();
list.removeFromLast();
list.print();
list.removeFromindexWise(4);
list.print();
list.removeFromValueWise(4);
list.print();
list.AddtoFirst(6);
list.AddtoFirst(5);
list.print();
list.removeDublicate();
list.print();

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let res = [];

for (let i = 0; i < arr.length; i += 2) {
  let a = [];
  for (let j = i; j < i + 2; j++) {
    if (arr[j]) {
      a.push(arr[j]);
    }
  }
  res.push(a);
}

console.log(res);

let out = [];
for (let i = 0; i < res.length; i++) {
  for (let j = 0; j < res[i].length; j++) {
    out.push(res[i][j]);
  }
}

console.log(out);
