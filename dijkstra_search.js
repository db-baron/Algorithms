// "Dijkstra's algorithm is a graph search that finds the shortest paths from
//  a starting node to all accessible nodes, producing a shortest path tree.

// Think of Dijkstra's algo as a breadth-first search for weighted graphs,

//// Dijkstra Psuedo-code ////
// 1. Enqueue start vertex.
// 2. Dequeue start vertex and add edge value and previous vertex to distance array (aka visited).
// 3. For each vertex neighbor, first enqueue the vertex with the lowest edge value (logic inside .enqueue function).
// 4. Dequeue the vertex and add the value of the edge to the distance array (aka visited).

// the outer index is the vertices, the inner index is the edges
var my_graph = [[ 0, 9, 5, 24, 200],
                [-1, 0, 3, -1, -1],
                [-1, 2, 0, 8, -1],
                [-1, -1,8, 0, 6],
                [ 5, -1, -1, -1, 0],
];

// From https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript
var priorityQueue = function() {
    this.items = [];
};

// enqueue is the only queue function that gets changed for priority queues (though we change all of their names)
priorityQueue.prototype.enqueue = function(prev_vertex, priority) {
    // this.items[i][1] is the distance from the prev vertex to the vertex that's being enqueued.
    for (var i = 0; i < this.items.length && this.items[i][1] > priority; i++); // This is where the priority queue takes place
        this.items.splice(i, 0, [prev_vertex, priority]) // add new element to this.items array at index i (while removing nothing).
    console.log("Previous vertex is", this.items[i][0]);
    console.log("Distance to enqueued vertex is", this.items[i][1]);
};

priorityQueue.prototype.dequeue = function() {
    return this.items.shift();
};

priorityQueue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

// Example Usage:
// var my_priority_queue = new priorityQueue();
//
// my_priority_queue.enqueue(0, 4)
// my_priority_queue.enqueue(0, 5)
// my_priority_queue.enqueue(0, 2)
// my_priority_queue.enqueue(0, 20)
// console.log(my_priority_queue);

var infinity = 1/0;

function dijkstra(graph, start_vertex) {
    var prev_vertex ;
    // Use the array 'visted' instead of the distance_array like in graph_bfs.js
    var visited = [];

    for (vertex in graph){
        if (vertex === start_vertex){
            visted.push([vertex, 0]);
        } else {
            visited.push([null, infinity]);
        }
    }
    var pqueue = new priorityQueue;  // Initialize a new queue to which vertices will be added as they are visted
    pqueue.enqueue(start_vertex, 0);  // Enqueue the start vertex and it's distance to itself, which is always 0.

    while (!pqueue.isEmpty()){
        //  Remove vertex from the PQ and explore all its edges
        var extracted_vertex = pqueue.dequeue();  // The vertex that gets dequeued first will have the lowest distance value because it was the first queued
        var previous_v = extracted_vertex[0];
        var distance_to_vertex = extracted_vertex[1];
        // var destination_vertex ;     // HOW DO I FIND THE VERTEX NUMBER OF WHAT JUST GOT DEQUEUED??? Well, isn't each i with a val > 0 a destination? Do you need to know what the current/destination vertex is?

        // Visit all neighbor vertices of the dequeued vertex. Each i is a possible neighbor vertex
        for(var i = 0; i < graph[previous_v].length; i++){   // is is the distance values in the sub-array (previously called this j)
            // var extracted_vertex_index = graph[visited[previous_v][0]];
            if (graph[previous_v][i] > 0){   // i > 0 means that the previous vertex has a connection to the vertex i
                pqueue.enqueue(previous_v, graph[previous_v][i]);
                console.log("Now Queueing previous vertex " + previous_v + " and distance " + graph[previous_v][i]);
                console.log("The PRIORITY QUEUE IS NOW", pqueue);

                var alt_dist = visited[previous_v][1] + distance_to_vertex;  // Sum the distance to prev vertex and distance to destination vertex.
                console.log(" visited[previous_v][1] is " + visited[previous_v][1] + " distance_to_vertex is" + distance_to_vertex);
                if (alt_dist < visited[previous_v][1]){
                    visited[previous_v][0] = previous_v;
                    visited[previous_v][1] = alt_dist;
                }
            }
            console.log("visited is ", visited);
            console.log("00000000000000000000000");
            console.log("visited[previous_v] = " + visited[previous_v] + "  visited[previous_v][0] = " + visited[previous_v][0]);
        }
    }
    return visited;
}

console.log(dijkstra(my_graph, 0));
