
class Queue {
  constructor() {
    this.items = [];
  }

  Enqueue(element) {
    this.items.push(element);
  }

  Dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  print() {
    console.log(this.items.toString());
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

queue.Enqueue(10)
queue.Enqueue(20)
queue.Enqueue(30)
queue.print()
queue.Dequeue()
queue.print()
console.log(queue.peek());



