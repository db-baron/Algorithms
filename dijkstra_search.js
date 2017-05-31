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
priorityQueue.prototype.enqueue = function(prev_vertex, current_vertex, priority) {
    // this.items[i][1] is the distance from the prev vertex to the vertex that's being enqueued.
    for (var i = 0; i < this.items.length && this.items[i][2] > priority; i++); // This is where the priority queue takes place
        this.items.splice(i, 0, [prev_vertex, current_vertex, priority]) // add new element to this.items array at index i (while removing nothing).
    // console.log("Previous vertex is", this.items[i][0]);
    // console.log("Distance to enqueued vertex is", this.items[i][1]);
};

priorityQueue.prototype.dequeue = function() {
    return this.items.pop();
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
// console.log(my_priority_queue.dequeue());

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
    pqueue.enqueue(start_vertex, start_vertex, 0);  // Enqueue the start vertex and it's distance to itself, which is always 0.
    console.log("BEFORE WHILE LOOP The PRIORITY QUEUE IS ", pqueue);

    while (!pqueue.isEmpty()){
        //  Remove vertex from the PQ and explore all its edges
        console.log("\n TOP OF WHILE LOOP - visitedarray is ", visited);
        var extracted_vertex = pqueue.dequeue();  // The vertex that gets dequeued first will have the lowest distance value because it was the first queued
        console.log("Now DEQUEUEING " + extracted_vertex + " PRIORITY QUEUE IS NOW ", pqueue);
        var previous_v = extracted_vertex[0];
        var current_v = extracted_vertex[1];
        var distance_to_vertex = extracted_vertex[2];
    // Loop through all neighbors of the current/dequeued vertex and do the following (each i is a possible neighbor vertex).
      // If distance_to_vertex + distance to previous_v is a shorter path than what is currently in the visited array...
        //  1. Update distance in the visited array, (i.e.  visited[current_v][1] = visited[previous_v][1] + distance_to_vertex
        //  2. Insert current vertex into the priority queue (Even if the current vertex is already there)
        for(var i = 0; i < graph[current_v].length; i++){
            if (graph[current_v][i] >= 0){   // i >= 0 means that graph[current_v][i] is a neighbor of current_v
                console.log("Now VISITING vertex " + current_v + "'s neighboring vertex " + i);
                if (visited[current_v][1] == "Infinity") {
                    visited[i][0] = previous_v;
                    visited[i][1] = distance_to_vertex;
                    console.log("Found a shorter path than " + visited[current_v][1] + " - visited arr is now ", visited);
                } else if (visited[previous_v][1] + distance_to_vertex < visited[current_v][1]){
                    visited[i][0] = previous_v;
                    visited[i][1] = visited[previous_v][1] + distance_to_vertex;
                    console.log("Found a shorter path than " + visited[current_v][1] + " - visited arr is now ", visited);
                }
                pqueue.enqueue(current_v, i, graph[current_v][i]);
                console.log("ENQUEUEING vertex " + i + " with previous vertex " + current_v + " current_v " + i + " and distance " + graph[previous_v][i] + " PRIORITY QUEUE IS NOW ", pqueue);
            }
        }
    }
    console.log("JUST EXITED WHILE LOOP");
    return visited;
}

console.log(dijkstra(my_graph, 0));
