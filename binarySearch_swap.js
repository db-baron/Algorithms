// Two of the nodes of a Binary Search Tree (BST) are swapped. Fix the BST.
// See https://stackoverflow.com/questions/11824946/in-a-bst-two-nodes-are-randomly-swapped-we-need-to-find-those-two-nodes-and-swap
// http://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/

// function BST(){
//     this.root = null;
// }
//
// function BTNode(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
// }

// import BST and BTNode functions from binarySearchTree_add_contains.js (for practice)
var BST = require('./binarySearchTree_add_remove_contains.js').BST
var BTNode = require('./binarySearchTree_add_remove_contains.js').BTNode
var my_BST = new BST();
my_BST.add(99);
console.log(my_BST.contains(99, my_BST.root))


BST.prototype.swap = function(){
    var trav_arr = [];
    var runner = this.root;
    while (trav_arr.length < 2) {
        if (runner.left.val > runner.right.val) {
            trav_arr.append()
        } else if (runner.right.val == "???" ){
            continue
        }
    }
// Maybe make an additional array which has the inorder traversal of
// the tree and also saves the pointer to each node.
// Then traverse the array and find the 2 nodes that are not in the
// sorted order, now these two nodes are searched in the tree and then swapped
}
