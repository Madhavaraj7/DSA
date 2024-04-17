let arr = [1, 2, 6, 9, 22, 88, 112, 333, 444, 455, 1230];

function recursiveBinary(arr, val, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return (arr[mid] = 999);
    }
    if (arr[mid] < val) {
      return recursiveBinary(arr, val, mid + 1, right);
    } else {
      return recursiveBinary(arr, val, left, mid - 1);
    }
  }
  return -1;
}
recursiveBinary(arr, 1230);
console.log(arr);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
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
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.prev = null;
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
        curr.prev.next = curr.next;
        curr.prev = null;
      }
    }
    return;
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
  removedublicates() {
    let curr = this.head;
    let prev = null;
    let arr = [];
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

list.AddToFirst(1);
list.AddToFirst(2);
list.AddToFirst(3);
list.AddToFirst(4);
list.AddToFirst(5);
list.AddToFirst(6);
list.print();
// list.AddToIndex(10, 5);
list.print();
// list.removeFromIndex(6);
list.print();
list.removeFromvalue(1);
list.print();
// list.reverse();
list.AddToFirst(5);
list.AddToFirst(6);
list.AddToFirst(5);
list.AddToFirst(6);
// list.print();
// list.removedublicates();
// list.print();

function evenAndOddSum(list) {
  let sum = 0;
  while (list) {
    sum += list.val;
    list = list.next;
  }
  // console.log(sum);
}

evenAndOddSum(list.head);

function arrrecusrion(arr) {
  if (arr.length === 0) {
    return null;
  }

  return arrrecusrion(arr);
}

function binarySerach(nums, val) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === val) {
      return mid;
    } 
    if (nums[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
} 

let nums=[1,2,3,4,5,6,7,8];
// console.log(binarySerach(nums,8));
