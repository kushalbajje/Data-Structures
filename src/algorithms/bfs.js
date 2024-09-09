// src/algorithms/bfs.js
function bfs(graph, startVertex) {
  const distances = {};
  const queue = [startVertex];
  const visited = new Set();

  distances[startVertex] = 0;
  visited.add(startVertex);

  while (queue.length) {
      const currentVertex = queue.shift();

      for (let neighbor of graph.getEdges(currentVertex)) {
          if (!visited.has(neighbor.node)) {
              visited.add(neighbor.node);
              distances[neighbor.node] = distances[currentVertex] + 1;
              queue.push(neighbor.node);
          }
      }
  }

  return distances;
}

module.exports = bfs;
