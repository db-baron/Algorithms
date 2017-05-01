// I think Ali took a photo of the solution Eli was showing on the big screen

// Breadth-first Graph search - Traverse a graph with a queue to store visited nodes and adjacency list (type of graph)
// This uses the sample graph shown at http://www.geeksforgeeks.org/wp-content/uploads/graph_representation12.png

// We start the search at the source and assign it a distance of 0. Then we visit all the
// neighbors of the source and give each neighbor a distance of 1 and set its predecessor to be the source.


// Queueing functions
var Queue = function() {
    this.head = 0;
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

var my_graph = [[1, 4],
                [0, 2, 3, 4],
                [1, 3],
                [1, 2, 4],
                [0, 1, 3],
                ];

function bfs(graph, start_vertex){
    var queue = new Queue;  // Initialize a new queue to which vertices will be added as they are visted
    queue.enqueue(start_vertex);  // Add the starting vertex to the queue
    // Create empty distance array. With 6 vertices it should end up being: distance_array = [0, 0, 0, 0, 0];
    var distance_array = [];
    for (x in graph){
        distance_array.push(null)
    }
    distance_array[start_vertex] = 0

    while (!queue.isEmpty()) {
        var current_idx = queue.dequeue();            // Set current vertex to the vertex that was just dequeued
        var current_vertex = graph[current_idx];
        console.log("current_vertex.length is", current_vertex.length);
        for (i = 0; i < current_vertex.length; i++){     // For each neighbor of the current vertex (i.e. 1, and 4 if we start at 0), check if it's been visited.
            console.log("distance_array[i] is", distance_array[i]);
            var neighbor = current_vertex[i];
            if (distance_array[neighbor] === null){                // If the vertex hasn't been visited yet, then add it to the queue.
                queue.enqueue(neighbor);
                distance_array[neighbor] = distance_array[current_idx] + 1  // When a vertex is dequeued/visited, add 1 to the distance array for each number of edges the dequeued vertex is away from the start vertex
            }
        }
    }
    return distance_array;
};

console.log(bfs(my_graph, 0));