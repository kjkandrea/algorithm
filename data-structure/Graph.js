export default class Graph {
  adjacencyList = {}

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight = null) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1)
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2)
    }

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push({
        neighbor: vertex2,
        weight
      })
    }

    if (!this.adjacencyList[vertex2].includes(vertex2)) {
      this.adjacencyList[vertex2].push({
        neighbor: vertex1,
        weight
      })
    }
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].map(({ neighbor }) => neighbor).join(", "));
    }
  }
}
