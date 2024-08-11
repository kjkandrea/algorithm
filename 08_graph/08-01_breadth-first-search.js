import Graph from "../data-structure/Graph.js";
import Queue from "../data-structure/Queue.js";

function breadthFirstSearch(graph, startVertex) {
  const queue = new Queue()
  queue.enqueue(startVertex)

  const result = []
  const visitedTable = {}
  visitedTable[startVertex] = true;

  while (!queue.isEmpty()) {
    const current = queue.dequeue()
    result.push(current)

    graph.adjacencyList[current].forEach(neighbor => {
      if (!visitedTable[neighbor]) {
        queue.enqueue(neighbor)
        visitedTable[neighbor] = true
      }
    })
  }

  return result
}

const graph = new Graph()
graph.addEdge(4, 6)
graph.addEdge(1, 4)
graph.addEdge(3, 5)
graph.addEdge(2, 5)
graph.addEdge(1, 3)
graph.addEdge(1, 2)

graph.display()

const result = breadthFirstSearch(graph, 1)
console.log(result)
