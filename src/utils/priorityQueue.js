class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(vertex, priority) {
        this.queue.push({ vertex, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports = PriorityQueue;
