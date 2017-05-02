module.exports = Display // Let other .js files use Display

// Object constructor
function SLL(list) {
    this.head = null;
}

//  Mode constructor
function Node(value) {
    this.value = value;
    this.next = null;
}

// Display a string containing all list values
function Display(list) {
    if(!list.head){
        return "Empty List"
    }
    var valuestring = "";
    var current = list.head;
    while (current) {
        valuestring += current.value + ", ";
        current = current.next
    }
    return valuestring;
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
function showLast(node, value) {
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
var new_list = new SLL();
new_list.head = x
x.next = y;
y.next = z;
x.value = "Cat";  // Replace value of node x with "Cat"
z.next = new Node("Bat")  // Another way of adding a node to the list

// showLast(x, "Umbrella");
// showLast(x, "Porpoise");
console.log(Display(new_list));
