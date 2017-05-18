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
        var current_vertex = pqueue.dequeue();  // What gets dequeued first will have the lowest distance value because it was the first queued
        var current_vertex_index    ;
        var previous_v = current_vertex[0];
        var distance_to_vertex = current_vertex[1];
        console.log("DEQUEING NOW NOW NOW NOW NOW NOW NOW NOW")
        console.log("current_vertex is", current_vertex);       // The queued vertex number and edge value to previously visited vertex
        console.log("previous_v is", previous_v);  // The number vertex you are currently visiting
        console.log("distance_to_vertex is", distance_to_vertex);  // The number vertex you are currently visiting
        console.log('\n')
        // console.log("visited[previous_v] is", visited[previous_v]);
        if (visited[current_vertex[0]][1] === Infinity){
            visited[previous_v] = current_vertex; // replace [null, Infinity] with [prev_vertex, distance]
        } else if ( ){
            visited[distance_to_vertex] = previous_v;
            visited[distance_to_vertex] += distance_to_vertex;
        }

        for(var i = previous_v ; i < graph[previous_v].length; i++) {  // enqueue all the neighbors of the current vertex
            // console.log("graph[i] is", graph[i]);
            console.log("graph[previous_v].length is", graph[previous_v].length);
            for (j=0; j < graph[previous_v].length; j++){
                // Now we need the graph sub-array's index of the current vertex's neighbors
                if (graph[i][j] > 0){   // The value being > 0 means that the vertex i has a connection to the vertex j
                    var neighbor_dist = graph[i][j];
                    console.log("previous_v is", previous_v);
                    console.log("The neighbor vertex is", j);
                    console.log("Distance to the neighbor vertex is", graph[i][j]);
                    console.log("visited[j][0] is", visited[j][0]);
                    if (visited[j][0] == null){       // If the vertex hasn't been visited yet, then add it to the queue.
                        pqueue.enqueue(j, graph[i][j]);
                        visited[j][0] = previous_v;  // When a vertex is dequeued/visited, add 1 to the distance array for each number of edges the dequeued vertex is away from the start vertex
                        console.log("visited[j][1] =", visited[j][1]);
                        console.log("neighbor_dist is", neighbor_dist);
                    }
                    if (visited[i][1] > neighbor_dist + graph[visited[i][0]][i] ){
                        visited[j][1] = neighbor_dist + graph[visited[i][0]][i];
                    } else if (visited[j][1] == Infinity){
                        console.log("Hadn't visited this connection yet");
                        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                        visited[j][1] = neighbor_dist;
                        console.log('visited[j][1] is ', visited[j][1]);
                        console.log('\n');
                    }
                    console.log("The visited array is now ", visited);
                    console.log('\n');

                    // if (visited[j][1] = Infinity){
                    //     visited[j][1] += neighbor_dist;
                    // } else {
                    //     console.log("Hadn't visited this connection yet");
                    //     console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                    //     console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                    //     visited[j][1] = neighbor_dist;
                    //     console.log('visited[j][1] is ', visited[j][1]);
                    //     console.log('\n');
                    // }
                }
            }
        }
    }
    // return visited;
}

console.log(dijkstra(my_graph, 0));
