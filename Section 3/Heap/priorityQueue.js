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
        if (A.length === 0) return null;
        
        const min = A[0];
        A[0] = A[A.length - 1];
        A.pop();
        
        let i = 0;
        while (i < A.length) {
            let minChildIndex = this.child1(i);
            if (minChildIndex >= A.length) break;
            if (minChildIndex + 1 < A.length && A[minChildIndex + 1].priority < A[minChildIndex].priority) {
                minChildIndex++;
            }
            if (A[i].priority > A[minChildIndex].priority) {
                [A[i], A[minChildIndex]] = [A[minChildIndex], A[i]];
                i = minChildIndex;
            } else {
                break;
            }
        }
        
        return min;
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

const priorityQueue = new MinHeap();
priorityQueue.insert(10, 1);
priorityQueue.insert(51, 2);
priorityQueue.insert(35, 3);
priorityQueue.insert(68, 9);
priorityQueue.insert(6, 0);
// priorityQueue.extractMin();
// priorityQueue.extractMin();
console.log(priorityQueue.heap);
