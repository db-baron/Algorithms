var Display = require('./SLL_display');  // Create the object 'Display', which is the Display function from SLL_display.js

// Object constructor
function SLL(list) {
    this.head = null;
}

//  Mode constructor
function Node(value) {
    this.value = value;
    this.next = null;
}

//  Create a SLL
var mylist = new SLL();
mylist.head = new Node("A");
mylist.head.next = new Node("B");
mylist.head.next.next = new Node("C");
mylist.head.next.next.next = new Node("D");

// What if we want to make adding to the SLL more automated? Make a function addToList
function addToList(list, val) {
    var newnode = new Node(val);
    // Check if list has a head. If it doesn't then make newnode the head
    if (!list.head) {
        list.head = newnode;
    }
    // If there IS a list head then add newnode as the next node
    else {
        var current = list.head;
        // So long that there's a current.next, keep moving down the list
        while(current.next){
            current = current.next;
        }
        // Once we get to the end of the list, we're at the place where we want to add a new node
        current.next = newnode;
    }
    return list;
}

// We need the Display function to show the result of using addToList.  Display returns a string containing all list values
//  This display function is different from that in SLL_display.js in that it displays a list in it's entirety, not each node.
// function Display(list) {
//     if(!list.head){
//         return "Empty List"
//     }
//     var valuestring = "";
//     var current = list.head;
//     while (current) {
//         valuestring += current.value + ", ";
//         current = current.next
//     }
//     return valuestring;
// }

console.log(Display(mylist))
console.log(addToList(mylist, "E"))
console.log(Display(mylist))
