class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val, priority) {
    const node = new Node(val, priority);
    const A = this.heap;
    A.push(node);
    let i = A.length - 1;
    while (i > 0 && A[i].priority < A[this.parent(i)].priority) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMin() {
    const A = this.heap;
    // if (A.length === 0) return null;
    // if (A.length === 1) return A.pop();

    // const min = A[0];
    A[0] = A.pop();
    this.heapify(0);
    // return min;
  }

  heapify(i) {
    const A = this.heap;
    const length = A.length;
    let smallest = i;
    const left = this.child1(i);
    const right = this.child2(i);

    if (left < length && A[left].priority < A[smallest].priority) {
      smallest = left;
    }

    if (right < length && A[right].priority < A[smallest].priority) {
      smallest = right;
    }

    if (smallest !== i) {
      [A[i], A[smallest]] = [A[smallest], A[i]];
      this.heapify(smallest);
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  child1(index) {
    return index * 2 + 1;
  }

  child2(index) {
    return index * 2 + 2;
  }
}

// Example usage
const priorityQueue = new MinHeap();
priorityQueue.insert(10, 1);
priorityQueue.insert(51, 2);
priorityQueue.insert(35, 3);
priorityQueue.insert(68, 9);
priorityQueue.insert(6, 0);
priorityQueue.extractMin();
priorityQueue.extractMin();
console.log(priorityQueue.heap);
