// Object constructot
function SLL(list) {
    this.head = null;
}

//  Mode constructor
function Node(value) {
    this.value = value;
    this.next = null;
}

// Display a string containing all list values
function Display(node) {
    var current = node;
    while (current) {
        console.log(current.value);
        current = current.next
    }
}

// Create a function that returns the last node's value
function Back(node) {
    var current = list.head.next;
    while (current) {
        current = current.next
    }
    console.log(current.value);
}

// Create a function that returns the last node's value
function addBack(node, value) {
    var current = node;
    while (current.next != null) {
        current = current.next;
    }
    current.next = new Node(value);
    console.log(current.next.value);
}

// Create your nodes
var x = new Node("Dog");
var y = new Node("Penguin");
var z = new Node("Camel");

// Create your linked list of nodes
x.value = "Cat";  // Replace value of node x with "Cat"
x.next = y;
y.next = z;
z.next = new Node("Bat")  // Another way of adding a node to the list

addBack(x, "Umbrella");
addBack(x, "Porpoise");
Display(x);
