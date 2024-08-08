export default class Graph {
  adjacencyList = {}

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1)
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2)
    }

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2)
    }

    if (!this.adjacencyList[vertex2].includes(vertex2)) {
      this.adjacencyList[vertex2].push(vertex1)
    }
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
    }
  }
}
