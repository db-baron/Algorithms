// function SLL(list) {
//     this.head = null;
//
// }

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

// Create your nodes
var x = new Node("Dog");
var y = new Node("Penguin");
var z = new Node("Camel");

// Create your linked list of nodes
x.value = "Cat";  // Replace value of node x with "Cat"
x.next = y;
y.next = z;

Display(x);
