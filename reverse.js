function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(binarySearch(arr,1));

function recusrive(arr, val, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] < val) {
      return recusrive(arr, val, mid + 1, right);
    } else {
      return recusrive(arr, val, left, mid - 1);
    }
  }
  return -1;
}

// console.log(recusrive(arr,5));

function palidorme(nums) {
  let str = "";
  for (let i = nums.length - 1; i >= 0; i--) {
    str += nums[i];
  }
  return str === nums;
}

// console.log(palidorme("malayalams"));

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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
  removeFromValue(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
      if (this.head) {
        this.prev = null;
      } else {
        this.tail = null;
      }
    }
    let curr = this.head;
    let prev;
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
  }
  get(index) {
    let i = 0;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr;
  }
  set(val, index) {
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

const list = new linkedList();

list.AddToFirst(1);
list.AddToFirst(2);
list.AddToFirst(3);
list.AddToFirst(4);
list.AddToFirst(5);
list.AddToFirst(6);

list.AddToLast(0);
list.AddToLast(1);
list.AddToLast(2);
list.AddToLast(3);

list.AddToIndex(12, 3);
// list.removeFromIndex(7);
list.removeFromValue(3);
// list.reverse();
// list.set(10,6)
// list.removeDuplicates();
// list.print();

function oddEvenSum(list) {
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
    console.log("odd:", odd, "even:", even);
}

oddEvenSum(list.head);

// let n = 5;

function suresh(n) {
  let res = " ";
  if (n <= 0) {
    return "";
  } else {
    res += n;
  }
  return (res += suresh(n - 1));
}
console.log(suresh(11));

let res = "1";
function call(N, i) {
  if (N == 1) {
    return res;
  }
  res = res + i;
  i++;
  return call(N - 1, i);
}
// console.log(call(10,2))

let i = 1;
let a = "";
function num(n) {
  a += i + " ";
  if (n === i) return;
  i++;
  num(n);
}

num(10);
console.log(a);

let arrr = [1, 2, 3, 4, 5, 6, 7];

let res1 = [];

for (let i = 0; i < arrr.length; i += 2) {
  let a = [];
  for (let j = i; j < i + 2; j++) {
    if (arrr[j]) {
      a.push(arrr[j]);
    }
  }
  res1.push(a);
}
console.log(res1);

let out = [];
for (let i = 0; i < res1.length; i++) {
  for (let j = 0; j < res1[i].length; j++) {
    out.push(res1[i][j]);
  }
}
console.log(out);


function factorial(nums) {
  if (nums < 2) {
    return nums;
  }
  return nums*factorial(nums-1)
}
console.log(factorial(8));


