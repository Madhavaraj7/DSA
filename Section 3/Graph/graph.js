class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addvertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addedges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.adjacencyList(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.adjacencyList(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);

  }

  removeEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    for (let i of this.adjacencyList[vertex]) {
      this.removeEdges(vertex, i);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }


 //DFS
  depthFirstRecursive(start) {
    const visited = {};
    const result = [];
    const adjacencyList1 = this.adjacencyList;
    
    (function dfs(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList1[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  //BFS
  breadthFirst(node) {
    if (!this.adjacencyList[node]) return null;
    let visited = {};
    let result = [];
    let queue = [];
    queue.push(node);
    visited[node] = true; 
    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      for (let v of this.adjacencyList[vertex]) {
        if (!visited[v]) {
          queue.push(v);
          visited[v] = true;
        }
      }
    }
    return result;

  }

  print() { 
    for (let i in this.adjacencyList) {
      console.log(i + "->" + [...this.adjacencyList[i]]);
    }
  }
}

const graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addedges("A", "B");
graph.addedges("A", "C");
// graph.removeEdges("A", "B");
// graph.removeVertex("C");
console.log(graph.breadthFirst("B"));
graph.print();

console.log(graph.hasEdge("B", "A"));
