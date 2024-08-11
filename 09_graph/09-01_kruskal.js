import Graph from "../data-structure/Graph.js";

function kruskal(graph) {
  // 문제 풀이
}

const graph = new Graph()
graph.addEdge(1, 2, 4)
graph.addEdge(1, 3, 3)
graph.addEdge(1, 4, 5)
graph.addEdge(2, 3, 6)
graph.addEdge(2, 5, 2)
graph.addEdge(3, 4, 2)
graph.addEdge(3, 5, 1)
graph.addEdge(3, 6, 1)
graph.addEdge(4, 6, 3)
graph.addEdge(5, 6, 4)

const mst = kruskal(graph)
mst.display()
