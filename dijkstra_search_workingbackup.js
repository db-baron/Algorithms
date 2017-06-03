// "Dijkstra's algorithm is a graph search that finds the shortest paths from
//  a starting vertex to all accessible vertices, producing a shortest path tree.

// Think of Dijkstra's algo as a breadth-first search for weighted graphs,

//// Dijkstra Psuedo-code ////
// 1. Enqueue start vertex.
// 2. Dequeue start vertex and add edge value and previous vertex to distance array (aka visited).
// 3. For each vertex neighbor, first enqueue the vertex with the lowest edge value (logic inside .enqueue function).
// 4. Dequeue the vertex and add the value of the edge to the distance array (aka visited).

// The outer array indices represent the vertices, the inner array values are the edges/distances
var my_graph = [[ 0, 9, 5, 24, 200],
                [-1, 0, 3, -1, -1],
                [-1, 2, 0, 8, -1],
                [-1, -1,8, 0, 6],
                [ 5, -1, -1, -1, 0],
];

// Set priority queue functions
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

// Example Usage of priority queue functions:
// var my_priority_queue = new priorityQueue();
// my_priority_queue.enqueue(0, 1, 9)
// my_priority_queue.enqueue(0, 2, 5)
// my_priority_queue.enqueue(0, 3, 24)
// my_priority_queue.enqueue(0, 4, 200)
// console.log(my_priority_queue);
// console.log(my_priority_queue.dequeue());


var infinity = 1/0;

// Assume all graph vertices will be represented by sequential non-negative integers starting at 0
function dijkstra(graph, start_vertex) {
    var visited = [];
    var prev_vertex ;

    // Create a range of vertices and check if start_vertex exists within it.
    function range(start, stop){
        var range_arr =[start], iterator=start;
        while( iterator < stop-1 ){
            iterator++;
            range_arr.push(iterator)
        }
        return range_arr;
    };
    if (range(0, graph.length).includes(start_vertex) == false){
        console.log("List of all graph vertices:", range(0, graph.length));
        return "Error. The start vertex must be a vertex in the graph";
    }

    // Create a visited array with initial conditions of all previous vertices being unknown (null) and all distances being infinity
    for (vertex in graph){
        if (vertex === start_vertex){
            visted.push([vertex, 0]);
        } else {
            visited.push([null, infinity]);
        }
    }
    // Initialize a new queue to which vertices will be added as they are visted
    var pqueue = new priorityQueue;
    // Enqueue the start vertex and it's distance to itself. The distance of a vertex to itself is always 0
    pqueue.enqueue(start_vertex, start_vertex, 0);

    // Set the start vertex's values fo previous vertex and distance in the visited array.
    visited[start_vertex][0] = start_vertex;
    visited[start_vertex][1] = 0;
    while (!pqueue.isEmpty()){
        //  Remove vertex from the priority queue and explore all its edges
        var extracted_vertex = pqueue.dequeue();  // The vertex that gets dequeued first will have the lowest distance value because it was the first queued
        var previous_v = extracted_vertex[0];
        var current_v = extracted_vertex[1];
        var distance = extracted_vertex[2];
        console.log("\n*** DEQUEUEING vertex " + current_v + " connected to prev vertex " + previous_v + " by a distance of " + distance);
        console.log("vertex " + previous_v + " has a distance of " + visited[previous_v][1] + " from the start vertex");

    // Loop through all neighbors of the current/dequeued vertex and do the following (each i is a possible neighbor vertex).
      // If distance + distance to previous_v is a shorter path than what is currently in the visited array...
        //  1. Update distance in the visited array
        //  2. Insert current vertex into the priority queue (Even if the current vertex is already there)
        for (var neighbor = 0; neighbor < graph[current_v].length; neighbor++){
            if (graph[current_v][neighbor] > 0){
                console.log("Now Visiting vertex " + current_v + "'s neighbor " + neighbor)
                console.log("Existing distance to " + neighbor + " from start_vertex is " + visited[neighbor][1]);
                console.log("Alternate distance is: visited[current_v][1] of " + visited[current_v][1] + " PLUS a graph[current_v][neighbor of " + graph[current_v][neighbor] + " which is " + (distance + graph[current_v][neighbor]));
                if (visited[neighbor][1] > visited[current_v][1] + graph[current_v][neighbor]) {
                    console.log("!!!!!! ALTERNATIVE DISTANCE WINS!");
                    visited[neighbor][1] = visited[current_v][1] + graph[current_v][neighbor];
                    visited[neighbor][0] = current_v;
                    console.log("Found a shorter path, visited array is now", visited);
                    pqueue.enqueue(current_v, neighbor, graph[current_v][neighbor]);
                    console.log("^^^^ NOW ENQUEUEING VERTEX " + neighbor);
                    console.log("Priority queue is now ", pqueue);
                    console.log("\n");
                }
            }
        }
    }
    console.log("\n\nThe shortest distance path from the start vertex to all vertices is: ");
    return visited;
}

console.log(dijkstra(my_graph, 1));
