// I think Ali took a photo of the solution Eli was showing on the big screen

// Breadth-first Graph search
// A distance, giving the minimum number of edges in any path from the source vertex to vertex v.

// We start the search at the source and assign it a distance of 0. Then we visit all the
// neighbors of the source and give each neighbor a distance of 1 and set its predecessor to be the source.

// Using the sample graph shown at http://blog.benoitvallon.com/img/2016-02-15-the-graph-data-structure/graph-view.jpg
var my_graph = [[2, 5],
                [1, 3, 5],
                [2, 4],
                [3, 5, 6],
                [1, 2, 4],
                [4],
                ]

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
    return this.items.shift();  // The shift method removes the first item of an array:
};

// var queue = new Queue();
// console.log(queue.enqueue(28));

function bfs(graph, start_vertex){
    var queue = new Queue;
    queue.enqueue(graph[start_vertex - 1]);  // assumes the numbering of vertices starts at 1

    var dist_arr = [0];
    var current_vertex = start_vertex;

    while (queue.length > 0) {
        current_vertex = queue.dequeue(graph[i][x])
        dist_arr.append(1) // Need to add 1 for each level of distance away from start vertex
    }

    return dist_arr
};

console.log(bfs(my_graph));
