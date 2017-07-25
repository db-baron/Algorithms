// Determine if an binary tree is a binary search tree
// Tra­verse the tree in-order and com­pare the cur­rent ele­ment with the pre­vi­ous element

function BinaryTree(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

var last_logged;

function isBST(root){
    // base case
    if(root === null){
        return true;
    }
    if (!isBST(root.left)){
        return false;
    }
}
// 
