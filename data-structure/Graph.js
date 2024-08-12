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

  getVerticesSize() {
    let count = 0

    for (const _ in this.adjacencyList) {
      count += 1
    }

    return count
  }

  getEdges() {
    const doneVertexSet = new Set()
    const edges = [] // [{ start: number, end: number, weight: number }]

    for (const vertex in this.adjacencyList) {
      for (const { neighbor, weight } of this.adjacencyList[vertex]) {
        if (doneVertexSet.has(neighbor)) continue

        edges.push({
          start: Number(vertex),
          end: neighbor,
          weight
        })
      }

      doneVertexSet.add(vertex)
    }

    return edges
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].map(({ neighbor }) => neighbor).join(", "));
    }
  }
}
