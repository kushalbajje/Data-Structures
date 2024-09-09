const Graph = require('../src/graph');
const dijkstra = require('../src/algorithms/dijkstra');

test('Dijkstra finds shortest paths in weighted graph', () => {
    const graph = new Graph(true); // Directed graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'C', 4);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('B', 'D', 6);
    graph.addEdge('C', 'D', 3);

    const result = dijkstra(graph, 'A');
    expect(result.distances).toEqual({ A: 0, B: 1, C: 3, D: 6 });
});
