let a=[2,4,6,8,10,11,23,45]
// check number 8
// and replace it with 0

function binarySearch(arr,val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
       return arr[mid]=0;
    }
    if (arr[mid] < val) {
      left = mid +1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
binarySearch(a,8)
console.log(a);

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
}

const list = new linkedList();

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.prepend(5);
list.print();




