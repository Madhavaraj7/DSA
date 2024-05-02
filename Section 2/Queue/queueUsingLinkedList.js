class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  Enqueue(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return node;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head=this.head.next;
    this.size--;
    return temp.val
  }

  print() {
    let current = this.head;
    let listvalue = "";
    while (current) {
      listvalue += `${current.val} `;
      current = current.next;
    }
    console.log(listvalue);
  }
}


const Myqueue = new queue();

Myqueue.Enqueue(1)
Myqueue.Enqueue(2)
Myqueue.Enqueue(3)
Myqueue.Enqueue(4)
Myqueue.print()
Myqueue.dequeue()
Myqueue.print()

