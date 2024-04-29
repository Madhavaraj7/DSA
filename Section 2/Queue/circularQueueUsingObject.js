class CircularQueue {
  constructor(size) {
    this.items = {};
    this.front = 0;
    this.rear = 0;
    this.size = size;
  }

  enqueue(val) {
    if (this.rear - this.front === this.size) {
      return console.log("queue is full");
    }
    this.items[this.rear++] = val;
  }

  dequeue(){
    // if() {  return }       queue is empty

    const res = this.items[this.front]
    delete this.items[this.front++]
    return res
  }


}

const queue = new CircularQueue(3)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.items);

