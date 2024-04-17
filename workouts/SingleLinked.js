class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  size() {
    return this.size;
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
    }else{
      this.tail.next=node;
      
      this.tail=node;
    }

    
  }

  addToIndexWise(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      console.log(false);
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
  removeFromIndexWise(index) {
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
    if (this.head.val) {
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
  }
  removeEven() {
    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      if (curr.val % 2 === 0) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        curr = curr.next;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }

  reverse() {
    let prev;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  //   removeAll(){
  //     this.head=null;

  //   }

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

const list = new linkedlist();

list.addToFirst(1);
list.addToFirst(2);
list.addToFirst(3);
list.addToFirst(4);
list.addToFirst(5);
list.addToFirst(6);
list.print();
list.print();
list.addToIndexWise(10, 5);
list.print();
list.removeTop();
list.print();
list.removeLast();
list.addToLast(7);
list.print();
// console.log(list.removeFromValuewise(3));
list.removeFromValuewise(5);
// console.log("after removing all");
list.print();
// list.removeAll();
// console.log("before removing all");
// list.reverse()
// list.print()
list.removeEven();
list.print();
