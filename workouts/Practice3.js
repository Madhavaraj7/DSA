class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class doubllyLinkedList {
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

  AddToindex(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      return console.log(false);
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

  removeFromIndex(index) {
    if (index < 0 || index > this.size - 1) {
      return console.log(false);
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
  removeFromvalue(val) {
    if (this.head.val === val) {
      this.head = this.head.next;

      return;
    }
    let curr = this.head;
    let prev = null;
    while (curr.val !== val) {
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
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr.prev = next;
      curr = next;
    }
    this.head = prev;
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
    }
  }
}

const list = new doubllyLinkedList();

list.AddToFirst(1);
list.AddToFirst(2);
list.AddToFirst(3);
list.AddToFirst(4);
list.AddToFirst(5);
list.AddToLast(0);
list.AddToindex(10, 5);
list.removeFromIndex(7);
// list.removeFromvalue(4);
list.print();
// list.reverse();
// list.print();

function evenSum(list) {
  let even = 0;
  let odd = 0;
  while (list) {
    if (list.val % 2 === 0) {
      even += list.val;
    } else {
      odd += list.val;
    }
    list = list.next;
  }
  console.log("even", even);
}

evenSum(list.head);

function merge(list1, list2) {
  const node = new Node();
  curr = node;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  if (list1) {
    node.next = list1;
  }
  if (list2) {
    node.next = list2;
  }

  return curr.next;
}

function recursiveBinarySearch(arr, val, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    }

    if (arr[mid]<val) {
        return recursiveBinarySearch(arr,val,mid+1,right)
        
    }else{
        return recursiveBinarySearch(arr,val,left,mid-1)
    }
  }
  return -1
}
let arr=[1,2,3,4,5,6,7];

console.log(recursiveBinarySearch(arr,4));