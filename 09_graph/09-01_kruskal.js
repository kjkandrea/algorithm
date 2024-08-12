import Graph from "../data-structure/Graph.js";
import UnionFind from "../data-structure/UnionFind.js";

function kruskal(graph) {
  const sortedEdges = graph.getEdges().sort(({ weight: a }, { weight: b }) => a - b)
  const size = graph.getVerticesSize()

  const unionFind = new UnionFind(size)

  const mst = []
  for (const edge of sortedEdges) {
    const root1 = unionFind.find(edge.start)
    const root2 = unionFind.find(edge.end)

    // 사이클이 형성되지 않는다면
    if (root1 !== root2) {
      unionFind.union(root1, root2)
      mst.push(edge)
    }
  }

  return mst
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
console.log(mst)
