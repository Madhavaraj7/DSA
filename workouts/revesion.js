class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubllyLinkedList {
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
      node.prev = this.head;
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
      this.size++;
      return;
    }
  }

  AddToIndex(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      return console.log(false);
    }

    if (index === 0) {
      node.prev = this.head;
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
    node.next.prev = node;
    curr.next = node;
    this.size++;
    return;
  }

  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      return console.log(false);
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.prev = null;
      } else {
        this.tail = null;
      }
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    return;
  }

  removeFromvalue(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      if (this.head) {
        this.prev = null;
      } else {
        this.tail = null;
      }
      return;
    }

    let curr = this.head;
    let prev = null;
    while (curr && curr.val !== val) {
      prev = curr;
      curr = curr.next;
    }
    if (curr) {
      prev.next = curr.next;
      if (curr === this.tail) {
        this.tail = prev;
      } else {
        curr.next.prev = curr.prev;
        curr.next = null;
      }
    }
    return;
  }

  removeduplicates() {
    let curr = this.head;
    let prev = null;
    let arr = [];
    while (curr) {
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
      let listvalue = "";
      while (curr) {
        listvalue += `${curr.val} `;
        curr = curr.next;
      }
      console.log(listvalue);
    } else {
      console.log("list is empty");
    }
  }
}

const list = new DoubllyLinkedList();

list.AddToFirst(1);
list.AddToFirst(2);
list.AddToFirst(3);
list.AddToFirst(4);
list.AddToFirst(5);
list.AddToLast(8);
list.AddToIndex(10, 5);
list.removeFromIndex(7);
// list.removeFromvalue(3);
console.log("before sort");
list.print();

function sorting(head) {
  let swapped;
  do {
    swapped = false;
    let curr = head;
    while (curr && curr.next !== null) {
      if (curr.val < curr.next.val) {
        let temp = curr.val;
        curr.val = curr.next.val;
        curr.next.val = temp;
        swapped = true;
      }
      curr = curr.next;
    }
  } while (swapped);
  return head;
}

sorting(list.head);

console.log("\nSorted List:");
list.print();

function evensum(list) {
  let even = 0;
  let odd = 0;
  while (list) {
    if (list.val % 2 === 0) {
      even += list.val;
    } else {
      odd += list.val;
    }
    list= list.next;
  }
  console.log("even:",even,"odd",odd)
}

evensum(list.head);
