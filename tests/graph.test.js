// tests/graph.test.js
const Graph = require('../src/graph');

describe('Graph Class', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph(false); // Create an undirected graph for testing
    });

    test('Should add vertices', () => {
        graph.addVertex('A');
        graph.addVertex('B');

        const vertices = graph.getVertices();
        expect(vertices).toEqual(['A', 'B']);
    });

    test('Should add undirected edges', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');

        expect(graph.getEdges('A')).toEqual([{ node: 'B', weight: 1 }]);
        expect(graph.getEdges('B')).toEqual([{ node: 'A', weight: 1 }]); // Undirected, so both should exist
    });

    test('Should add directed edges', () => {
        const directedGraph = new Graph(true);
        directedGraph.addVertex('A');
        directedGraph.addVertex('B');
        directedGraph.addEdge('A', 'B');

        expect(directedGraph.getEdges('A')).toEqual([{ node: 'B', weight: 1 }]);
        expect(directedGraph.getEdges('B')).toEqual([]); // No edge back from B to A
    });

    test('Should handle weighted edges', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B', 5);

        expect(graph.getEdges('A')).toEqual([{ node: 'B', weight: 5 }]);
        expect(graph.getEdges('B')).toEqual([{ node: 'A', weight: 5 }]);
    });

    test('Should return empty list for non-existent vertex', () => {
        expect(graph.getEdges('NonExistent')).toEqual([]);
    });
});
