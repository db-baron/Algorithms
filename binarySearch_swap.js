// Create a bST prototype function that identifies
function BST(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

// import BST.prototype.add from binarySearchTree_add_contains.js to create tree
var BST = require('./binarySearchTree_add_contains.js')

var my_BST = new BST();
my_BST.add(99);
console.log(my_BST.contains(99, my_BST.root))


BST.prototype.swap = function(){

}
