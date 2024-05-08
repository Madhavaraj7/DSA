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
  breadthFirstSearch(start) {
    const visited = {};
    const queue = [start];

    while (queue.length) {
      const curr = queue.shift();
      if (!visited[curr]) {
        console.log(curr);

        for (let neighbor of this.adjacencyList[curr]) {
          queue.push(neighbor);
        }

        visited[curr] = true;
      }
    }
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
graph.addedges("B", "C");
// graph.removeEdges("A", "B");
graph.removeVertex("C");
console.log(graph.breadthFirstSearch("A"));
graph.print();

// console.log(graph.hasEdge("B", "A"));
