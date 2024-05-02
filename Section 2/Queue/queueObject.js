class Queue {
  constructor() {
    this.items = {};
    this.first = 0;
    this.last = 0;
  }
  Enqueue(element) {
    this.items[this.last++] = element;
  }

  Dequeue(){
    let removed = this.items[this.first];
    delete this.items[this.first];
    this.first++;
    return removed
  }

  peek(){
    return this.items[this.first]
  }

  isEmpty(){
    return this.first - this.last ===0
  }

  print(){
    const values = Object.values(this.items)
    console.log(values);
  }
}

const queue = new Queue();

queue.Enqueue(10);
queue.Enqueue(20);
queue.Enqueue(30);
queue.Enqueue(40);
queue.print();
queue.Dequeue();
queue.print();
console.log(queue.isEmpty());
