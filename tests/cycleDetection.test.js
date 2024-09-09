const Graph = require('../src/graph');
const { detectCycleDirected, detectCycleUndirected } = require('../src/algorithms/cycleDetection');

test('Cycle Detection in Directed Graph', () => {
    const graph = new Graph(true); // Directed graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A'); // Cycle A -> B -> C -> A

    expect(detectCycleDirected(graph)).toBe(true);
});

test('No Cycle in Directed Graph', () => {
    const graph = new Graph(true); // Directed graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');

    expect(detectCycleDirected(graph)).toBe(false);
});

test('Cycle Detection in Undirected Graph', () => {
    const graph = new Graph(false); // Undirected graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('A', 'C'); // Cycle A - B - C - A

    expect(detectCycleUndirected(graph)).toBe(true);
});

test('No Cycle in Undirected Graph', () => {
    const graph = new Graph(false); // Undirected graph
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');

    expect(detectCycleUndirected(graph)).toBe(false);
});
