// Determine if an binary tree is a binary search tree
// Tra­verse the tree in-order and com­pare the cur­rent ele­ment with the pre­vi­ous element
// Time com­plex­ity: O(N)
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
    // Verify and recurse left node
    if (!isBST(root.left)){
        return false;
    }
    // Verify the current node
    if (last_logged !== null && root.data <= last_logged) {
        return false;
    }

}
