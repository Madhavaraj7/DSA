// let hunais = [1, 2, 6, 9, 22, 88, 112, 333, 444, 455, 1230];

// function hunaisSearch(hunais, val) {
//   let left = 0;
//   let right = hunais.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (hunais[mid] === val) {
//       return (hunais[mid] = 999);
//     }
//     if (hunais[mid] < val) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// hunaisSearch(hunais, 1230);

// console.log(hunais);
// let aa =0
// function recursiveEven(nums) {
//   if (nums ===0) {
//     return 0;

// }
// if (nums%2==0) {
//     nums=nums-1
// }

// aa +=1
//   return nums+recursiveEven(nums-1);

// }
// console.log(recursiveEven(10));
// console.log(aa);

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
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return;
  }

  removeFromevalue(val) {
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
        curr.next.prev = prev;
      }
    }
    return;
  }
  removeDuplicates() {
    let curr = this.head;
    let prev = null;
    let arr = [];
    while (curr !== null) {
      if (arr.includes(curr.val)) {
        prev.next = curr.next;
      } else {
        prev = curr;
        arr.push(curr.val);
      }
      curr = curr.next;
    }
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
const hunaisList = new linkedList();
hunaisList.AddToFirst(1);
hunaisList.AddToFirst(2);
hunaisList.AddToFirst(3);
hunaisList.AddToFirst(4);
hunaisList.AddToFirst(5);
hunaisList.AddToFirst(6);
console.log("Before reverse");
hunaisList.print();
console.log("After reverse");
hunaisList.reverse();
hunaisList.print();
hunaisList.AddToIndex(10, 5);
hunaisList.print();

hunaisList.removeFromevalue(1);
hunaisList.AddToFirst(6);
hunaisList.AddToFirst(6);

hunaisList.print();
hunaisList.removeDuplicates();
hunaisList.print();

function isPowerOftwo(nums) {
  if (nums < 1) {
    return false;
  }
  if (nums === 1) {
    return true;
  }

  return isPowerOftwo(nums / 2);
}

console.log(isPowerOftwo(1));
