// // Determine if an binary tree is a binary search tree
// // Tra­verse the tree in-order and com­pare the cur­rent ele­ment with the pre­vi­ous element
// // Time com­plex­ity: O(N)
// function BST(){
//     this.root = null;
// }
//
// function BTNode(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
// }
//
//
// var last_logged;
//
// function isBST(root){
//     // Base case
//     if (root === null){
//         return true;
//     }
//     // Verify and recurse left node
//     if (!isBST(root.left)){
//         return false;
//     }
//     // Verify the current node
//     if (last_logged !== null && root.val <= last_logged) {
//         return false;
//     }
//     // Log the current data for debugging and update last_logged Value
//     console.log("Current Node is ", root.val)
//     last_logged = root.val
//
//     // Verify and recurse right
//     if (!isBST(root.right)){
//         return false;
//     }
//
//     return true;
// }
//
// // import BST.prototype.add from binarySearchTree_add_contains.js to create tree
// var BST = require('./binarySearchTree_add_remove_contains.js')
//
// var my_BST = new BST();
// my_BinaryTree.add(2);
// my_BinaryTree.add(6);
// my_BinaryTree.add(9);
// console.log(isBST(my_BinaryTree));

setTimeout(function() {
    console.log("second");
}, );
