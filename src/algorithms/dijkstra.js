const PriorityQueue = require('../utils/priorityQueue');

function dijkstra(graph, startVertex) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    
    // Initialize distances and priority queue
    graph.getVertices().forEach(vertex => {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    });
    distances[startVertex] = 0;
    pq.enqueue(startVertex, 0);

    while (!pq.isEmpty()) {
        const { vertex: currentVertex } = pq.dequeue();

        for (let neighbor of graph.getEdges(currentVertex)) {
            const { node: neighborVertex, weight } = neighbor;
            const distance = distances[currentVertex] + weight;

            if (distance < distances[neighborVertex]) {
                distances[neighborVertex] = distance;
                previous[neighborVertex] = currentVertex;
                pq.enqueue(neighborVertex, distance);
            }
        }
    }

    return { distances, previous };
}

module.exports = dijkstra;
