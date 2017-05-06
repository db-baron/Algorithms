// "Dijkstra's algorithm is a graph search that finds the shortest paths from a
// starting node to all accessible nodes, producing a shortest path tree

var my_graph = {
	vertex: ["1","2","3","4","5"],
	edge: [,
	// vertex1, vertex2, weight
		["A", "B", 7],
		["B", "C", 9],
		["A", "E", 14],
		["B", "C", 10],
		["B", "D", 15],
		["C", "D", 11],
		["C", "E", 2],
		["D", "E", 6],
	]
};

function dijkstra(graph, start_vertex) {
    var distance = {};
    var prev = {};
    var vertices = {};
    var u;
}
