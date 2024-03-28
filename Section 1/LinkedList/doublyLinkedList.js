class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      const node = new Node(val);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
      return this;
    }
  
    pop() {
      if (this.length === 0) {
        return undefined;
      }
      let removed = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let prev = this.tail.prev;
        prev.next = null;
        this.tail = prev;
      }
      this.length--;
      return removed;
    }
  
    shift() {
      if (this.length === 0) {
        return undefined;
      }
      let oldHead = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        oldHead.next = null;
        this.head.prev = null;
      }
      this.length--;
      return oldHead;
    }
  
    unshift(val) {
      const node = new Node(val);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
      this.length++;
      return val;
    }
  
    print() {
      if (this.length === 0) {
        console.log("list is empty");
        return null;
      }
      let curr = this.head;
      while (curr) {
        console.log(curr.val);
        curr = curr.next;
      }
    }
  
    get(index) {
      if (index < 0 || index >= this.length) return null;
      if (index <= this.length / 2) {
        let curr = this.head;
        let i = 0;
        while (i !== index) {
          curr = curr.next;
          i++;
        }
        return curr;
      } else {
        let curr = this.tail;
        let i = this.length - 1;
        while (i !== index) {
          curr = curr.prev;
          i--;
        }
        return curr;
      }
    }
  
    set(index, val) {
      let node = this.get(index);
      if (node) {
        node.val = val;
        return true;
      }
      return false;
    }
  
    insert(index, val) {
      const node = new Node(val);
      if (index === 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
  
      if (index === this.length) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
  
      const foundNode = this.get(index - 1);
  
      let next = foundNode.next;
      foundNode.next = node;
      node.prev = foundNode;
      node.next = next;
      next.prev = node;
      this.length++;
      return true;
    }
  }
  
  const list = new DoublyLinkedList();
  
  list.push(1);
  list.push(3);
  list.push(4);
  list.push(5);
  // list.pop();
  // list.shift();
  // list.pop();
  // list.unshift(10);
  // console.log(list.set(2, 99));
  // list.insert(0,11)
  list.insert(2, 99);
  list.print();
  // console.log("affee ", list.get(0));
  // console.log("llllllsf ", list.get(1));
 