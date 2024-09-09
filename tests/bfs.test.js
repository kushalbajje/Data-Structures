// tests/bfs.test.js
const Graph = require('../src/graph');
const bfs = require('../src/algorithms/bfs');

test('BFS finds shortest paths in unweighted graph', () => {
    const graph = new Graph(false);
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');

    const distances = bfs(graph, 'A');
    expect(distances).toEqual({ A: 0, B: 1, C: 1, D: 2 });
});
