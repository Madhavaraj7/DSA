class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.size = size;
    this.currentLength = 0;
    this.first = -1;
    this.last = -1;
  }

  isFull() {
    return this.currentLength === this.size;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  Enqueue(element) {
    if (!this.isFull()) {
      this.last = (this.last + 1) % this.size;
      this.items[this.last] = element;
      this.currentLength++;
      if (this.first === -1) {
        this.first = this.last;
      }
    }
  }

  Dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let removed = this.items[this.first];
    this.items[this.first] = null;
    this.first++;
    this.currentLength--;
    if (!this.isEmpty) {
      this.first = -1;
      this.last = -1;
    }
    return removed;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.first];
    }
    return null;
  }

  print() {
    console.log(this.items.toString());
  }

  print1() {
    if (this.isEmpty()) {
      console.log("queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.first; i !== this.last; i = (i + 1) % this.size) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(3);

queue.Enqueue(10);
queue.Enqueue(20);
queue.Enqueue(30);
queue.Dequeue();
queue.print1();
console.log(queue.peek());
