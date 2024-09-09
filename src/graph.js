// src/graph.js
class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = {};
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight = 1) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });

        if (!this.isDirected) {
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }

    getVertices() {
        return Object.keys(this.adjacencyList);
    }

    getEdges(vertex) {
        // Return an empty array if the vertex does not exist
        return this.adjacencyList[vertex] || [];
    }
}

module.exports = Graph;
