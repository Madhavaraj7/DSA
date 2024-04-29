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

  AddToFirst(val) {
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

  AddToLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
      return;
    }
  }

  AddToIndex(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      console.log(false);
      return;
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

  removefromvalue(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
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
        return;
      }
    }
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

list.AddToFirst(1);
list.AddToFirst(2);
list.AddToFirst(3);
list.AddToFirst(4);
list.AddToFirst(5);
list.AddToFirst(6);

list.print();

function sort(head) {
  let swapped;
  do {
    swapped = false;
    let curr = head;
   while (curr && curr.next !== null){
     if (curr.val > curr.next.val) {
       let temp = curr.val;
       curr.val = curr.next.val;
       curr.next.val = temp;
       swapped = true;
     }
     curr = curr.next;
   }
  
  }while(swapped);
  return head;
}
sort(list.head);
console.log("after sort");
list.print()

 