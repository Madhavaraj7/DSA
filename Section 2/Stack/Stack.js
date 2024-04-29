class Stack {
  constructor(capacity) {
    this.stack = [];
    this.capacity = capacity;
  }
  push(val) {
    if (this.stack.length < this.capacity) {
      this.stack.push(val);
    } else {
      console.log("stack over flow");
    }
  }
  pop(val) {
    if (this.stack.length > 0) {
      this.stack.pop(val);
    } else {
      console.log("stack underflow error");
    }
  }

  peek() {
    if (this.stack.length === 0) {
      console.log("stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }

  display() {
    console.log(this.stack);
  }

  size() {
    return this.stack.length;
  }
}

let stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();

console.log(stack.size());
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.peek());
stack.display();
