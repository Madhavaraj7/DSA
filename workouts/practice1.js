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

  addToFirst(val) {
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
  addToLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
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
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
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

  removeFrom(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      if (this.head) {
        this.prev = null;
      } else {
        this.tail = null;
      }
    }

    let prev;
    let curr = this.head;
    while (curr && curr.val !== val) {
      prev = curr;
      curr = curr.next;
    }

    if (curr) {
      prev.next = curr.next;
      if (curr === this.tail) {
        this.tail = prev;
      } else {
        curr.next.prev = prev;
      }
    }
    return;
  }

  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      console.log(false);
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.prev = null;
      } else {
        this.tail = null;
      }
    }
    let curr=this.head;
    for(let i=0;i<index-1;i++){
      curr=curr.next
    }
    curr.next.prev=curr.prev
    curr.prev.next=curr.next;
    curr=null;
  }
  reverse() {
    let prev=null;
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

const list = new doublyLinkedlist();

list.addToFirst(1);
list.addToFirst(2);
list.addToFirst(3);
list.addToFirst(4);
list.addToFirst(5);
list.addToFirst(6);
list.print();
list.addToLast(7);
list.print();
list.insertIndexWise(8, 6);
list.print();
// list.removeFrom(7);
list.print();
list.reverse();
list.print();

