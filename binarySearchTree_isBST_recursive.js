// Determine if an binary tree is a binary search tree
// Tra­verse the tree in-order and com­pare the cur­rent ele­ment with the pre­vi­ous element
// Time com­plex­ity: O(N)
function BST(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


var last_logged;

function isBST(root){
    // Base case
    if (root === null){
        return true;
    }
    // Verify and recurse left node
    if (!isBST(root.left)){
        return false;
    }
    // Verify the current node
    if (last_logged !== null && root.val <= last_logged) {
        return false;
    }
    // Log the current data for debugging and update last_logged Value
    // console.log("Current Node is ", root.val)
    last_logged = root.val

    // Verify and recurse right
    if (!isBST(root.right)){
        return false;
    }

    return true;
}

// import BST.prototype.add from binarySearchTree_add_contains.js to create tree
var BST = require('./binarySearchTree_add_remove_contains.js').BST
var BTNode = require('./binarySearchTree_add_remove_contains.js').BTNode

// Create a Binary Tree as a sample input
var root = {
  data : 8,
  left : null,
  right : null
};
var n1 = {
  data : 10,
  left : null,
  right : null
};

var n2 = {
  data : 6,
  left : null,
  right : null
};


var my_BST = new BST();

my_BST.root = root;

// Create a Binary Search Tree (BST) and Verify
my_BST.root.left = n2;
my_BST.root.right = n1;
console.log(isBST(my_BST.root)); // true

// Create a non-BST and Verify
my_BST.root.left = n1;
console.log(isBST(my_BST.root)); // false
