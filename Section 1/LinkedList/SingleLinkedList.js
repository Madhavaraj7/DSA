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

  // size of the list
  size() {
    return this.size;
  }

  //inserting new values to the last of the list
  // 0(1)
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // inserting values to the start of the list
  // 0(1)
  prepend(val) {
    const node = new Node(val);
    if (!this.head ) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //insert elements at specific index

  insert(value, index) {
    const node = new Node(value);
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
      curr = curr.next.next;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return true;
  }

  //delete elements at specific index

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let remove;
    if (index === 0) {
      remove = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      // console.log(prev);
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      remove = prev.next;
      prev.next = remove.next;
    }
    this.size--;
    return remove.val;
  }

  
  //remove by value
  removeValue(val) {
    if (this.size === 0) return null;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return val;
    } else {
      let curr = this.head;
      let prev = curr;

      while (curr.val !== val) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
      curr = null;
      this.size--;
      return curr;
    }
    return null;
  }

  //get elements at specific index
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    while (i != curr) {
      curr = curr.next;
      i++;
    }
    return curr;
  }

  // change elements at specific position
  set(index, val) {
    let foundValue = this.get(index);
    if (foundValue) {
      foundValue.val = val;
      return true;
    }
    return false;
  }

  

  //print the list
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

  reverse(){
    let prev=null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next
    }
    this.head = prev;
  }
}

const list = new linkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(10);
list.push(33);
list.print();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();

list.insert(77, 1);
list.print();

console.log(list.removeFrom(4));
list.print();

console.log(list.size);
list.print();

list.reverse();
list.print()





//workouts

function oddAndEvenSum(list) {
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
  console.log("even: ", even, "odd: ", odd);
}

oddAndEvenSum(list.head);