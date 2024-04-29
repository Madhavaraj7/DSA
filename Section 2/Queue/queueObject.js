class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  Enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  Dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    const prints= Object.values(this.items)
    console.log(prints.toString());
  }
}

const queue = new Queue();

queue.Enqueue(10)
queue.Enqueue(20)
queue.Enqueue(30)
queue.Enqueue(40)
queue.print()
queue.Dequeue()
queue.print()
console.log(queue.peek());

