class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addTovertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addToedges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addTovertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addTovertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removedges(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v.node !== vertex2
    );
  }

  removevertex(vertex){
    while (this.adjacencyList[vertex].length) {
      const adjacencyList = this.adjacencyList[vertex].pop();
      this.removedges(vertex,adjacencyList.node);
      
    }
    delete this.adjacencyList[vertex]
  }

  depathFirstSearch(start) {
    let visited = {};
    let data = [];
    let adjacencyList1 = this.adjacencyList;

    (function dfs(vertex) {
      visited[vertex] = true;
      data.push(vertex);
      adjacencyList1[vertex].forEach((n) => {
        if (!visited[n]) {
          return dfs(n);
        }
      });
    })(start);
    return data;
  }

  print() {
    for (let i in this.adjacencyList) {
      console.log(i + "->" + [...this.adjacencyList[i]]);
    }
  }
}

const g = new Graph();
g.addTovertex("A");
g.addTovertex("B");
g.addTovertex("C");
g.addToedges("A", "C");
g.addToedges("A", "B");
g.print();
console.log(g.depathFirstSearch("B"));
// console.log(g.adjacencyList);
