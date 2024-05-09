class Graph {
  constructor() {
    this.adjencency = {};
  }

  addvertex(vertex) {
    if (!this.adjencency[vertex]) {
      this.adjencency[vertex] = new Set();
    }
  }

  addedges(vertex1, vertex2) {
    if (!this.adjencency[vertex1]) {
      this.adjencency(vertex1);
    }

    if (!this.adjencency[vertex2]) {
      this.adjencency(vertex2);
    }

    this.adjencency[vertex1].add(vertex2);
    this.adjencency[vertex2].add(vertex1);
  }

  dfs(start) {
    let visited = {};
    let data = [];
    let adjacencyList1 = this.adjencency;

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

  bfs(node) {
    if (!this.adjencency[node]) {
      return null;
    }

    let visited = {};
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      visited[vertex] = true;
      let vertex = queue.shift();
      data.push(vertex);
      for (let i of this.adjencency[vertex]) {
        if (!visited[i]) {
          data.push(i);
          visited[i] = true;
          
        }
      }
    }
    return data
  }

  print() {
    for (let i in this.adjencency) {
      console.log(i + "->" + [...this.adjencency[i]]);
    }
  }
}

const graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addedges("A", "B");
graph.addedges("A", "C");
graph.print();

console.log(graph.dfs("A"));
console.log(graph.bfs("B"));
