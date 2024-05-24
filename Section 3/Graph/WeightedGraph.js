class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v.node !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v.node !== vertex1
      );
    }
  
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex.node);
      }
      delete this.adjacencyList[vertex];
    }

    print() {
      for (let vertex in this.adjacencyList) {
        const edges = this.adjacencyList[vertex].map(edge => `${edge.node} (${edge.weight})`);
        console.log(`${vertex} => [${edges.join(", ")}]`);
      }
    }
  }
  
  // Example usage:
  const graph = new WeightedGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B", 5);
  graph.addEdge("B", "C", 3);
  // graph.print()
  console.log(graph.adjacencyList);