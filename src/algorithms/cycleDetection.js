// Cycle detection for Directed Graphs using DFS
function detectCycleDirected(graph) {
    const visited = new Set();
    const recStack = new Set();

    const dfs = (vertex) => {
        if (recStack.has(vertex)) return true; // Cycle detected
        if (visited.has(vertex)) return false; // Already visited

        visited.add(vertex);
        recStack.add(vertex);

        for (let neighbor of graph.getEdges(vertex)) {
            if (dfs(neighbor.node)) return true;
        }

        recStack.delete(vertex);
        return false;
    };

    for (let vertex of graph.getVertices()) {
        if (dfs(vertex)) return true;
    }

    return false; // No cycle found
}

// Cycle detection for Undirected Graphs using DFS
function detectCycleUndirected(graph) {
    const visited = new Set();

    const dfs = (vertex, parent) => {
        visited.add(vertex);

        for (let neighbor of graph.getEdges(vertex)) {
            if (!visited.has(neighbor.node)) {
                if (dfs(neighbor.node, vertex)) return true;
            } else if (neighbor.node !== parent) {
                return true; // Cycle detected
            }
        }

        return false;
    };

    for (let vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            if (dfs(vertex, null)) return true;
        }
    }

    return false; // No cycle found
}

module.exports = { detectCycleDirected, detectCycleUndirected };
