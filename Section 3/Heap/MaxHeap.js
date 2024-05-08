class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      const A = this.heap;
      A.push(val);
  
      //bubbling up:
      let i = A.length - 1;
      while (A.length > 1 && A[i] > A[this.parent(i)]) {
        [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
        i = this.parent(i);
      }
    } //Time: O(log n) no.of nodes since its binary heap | Space: O(n)
  
    extractMin() {
      const A = this.heap;
      const max = A[0];
      //We'll do a algo to shift the last value of the array and bubble it down
      A[0] = A[A.length - 1];
  
      //bubbling down:
      let i = 0;
      while (i < A.length) {
        let C =
          A[this.child1(i)] > A[this.child2(i)] ? this.child1(i) : this.child2(i);
        if (A[i] < A[C]) {
          [A[i], A[C]] = [A[C], A[i]];
          i = C;
        } else {
          break;
        }
      }
      A.pop();
      return max;
    } //Time: O(log n) no.of nodes | space: O(1)
  
  
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
  
  const minHeap = new MaxHeap();
  minHeap.insert(10);
  minHeap.insert(51);
  minHeap.insert(35);
  minHeap.insert(68);
  minHeap.insert(6);
  minHeap.extractMin()
  minHeap.extractMin()
  console.log(minHeap.heap);