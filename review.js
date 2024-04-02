let a = [2, 4, 6, 8, 10, 11, 23, 45];
// check number 8
// and replace it with 0

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return (arr[mid] = 0);
    }

    if (arr[mid] < val) {
      left = mid - 1;
    } else {
      right = mid + 1;
    }
  }
  return -1;
}

binarySearch(a, 8);
// console.log(a);

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

  prepend(val) {
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

  insert(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      return console.log(false);
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return true;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return true;
  }

  removefromindexAndadd(val, index) {
    const node = new Node(val);
    if (index < 0 || index > this.size) {
      return console.log(false);
    }
    if (index === this.head.val) {
      node.next = this.head.next;
      this.head = node;
      return;
    }
    let curr = this.head;
    let prev = curr;
    while (curr.val != index) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = node;
    node.next = curr.next;
  }
}

const list = new linkedList();

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.prepend(5);
// list.print();
// list.reverse();
// list.insert(10, 2);
// list.print();

list.print();
list.removefromindexAndadd(12, 5);
list.print();

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let result = s[left];
    s[left] = s[right];
    s[right] = result;
    left++;
    right--;
  }
  return s;
};
// console.log(reverseString(["h","e","l","l","o"]));

function fibpnnoci(num) {
  if (num < 2) {
    return num;
  }
  return fibpnnoci(num - 1) + fibpnnoci(num - 2);
}

// console.log(fibpnnoci(3));
