import Graph from "../data-structure/Graph.js";
import Stack from "../data-structure/Stack.js";

function depthFirstSearch(graph, startVertex) {
  const stack = new Stack()
  stack.push(startVertex)

  const result = []
  const visitedTable = {}
  visitedTable[startVertex] = true;

  let current;

  while (!stack.isEmpty()) {
    current = stack.pop()
    result.push(current)

    graph.adjacencyList[current].forEach(neighbor => {
      if (!visitedTable[neighbor]) {
        visitedTable[neighbor] = true
        stack.push(neighbor)
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

const result = depthFirstSearch(graph, 1)
console.log(result)
