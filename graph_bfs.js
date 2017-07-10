// Breadth-first Graph search for an array - Traverse a graph with a queue to store visited nodes and adjacency list (type of graph)
// This uses the sample graph shown at http://www.geeksforgeeks.org/wp-content/uploads/graph_representation12.png

// Queueing functions (I'm using an array for my distance list, not an SLL)
var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
    return this.items
};
Queue.prototype.dequeue = function() {
    return this.items.shift();  // shift method removes the first item of an array:
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

// var queue = new Queue();
// console.log(queue.enqueue(28));


function bfs(graph, start_vertex){
    var queue = new Queue;  // Initialize a new queue to which vertices will be added as they are visted
    queue.enqueue(start_vertex);  // Add the starting vertex to the queue
    // Create empty distance array. With 6 vertices it should end up being: distance_array = [null, null, null, null, null];
    var distance_array = [];
    for (x in graph){
        distance_array.push(null)
    }
    distance_array[start_vertex] = 0   // Sets the distance of the the start vertex to itself, which it always 0.

    while (!queue.isEmpty()) {
        var current_idx = queue.dequeue();            // Set current vertex to the vertex that was just dequeued
        console.log("current_idx is", current_idx);
        var current_vertex = graph[current_idx];
        console.log("current_vertex is", current_vertex);

        console.log("current_vertex.length is", current_vertex.length);
        for (i = 0; i < current_vertex.length; i++){     // For each neighbor of the current vertex (i.e. 1, and 4 if we start at 0), check if it's been visited.
            console.log("distance_array[i] is" + distance_array[i]);
            var neighbor = current_vertex[i];
            if (distance_array[neighbor] === null){    // If the vertex hasn't been visited yet, add it to the queue.
                queue.enqueue(neighbor);
                distance_array[neighbor] = distance_array[current_idx] + 1;  // When a vertex is dequeued/visited, add 1 to the distance array for each number of edges the dequeued vertex is away from the start vertex
            }
        }
    }
    return distance_array;
};

console.log(bfs(my_graph, 0));
