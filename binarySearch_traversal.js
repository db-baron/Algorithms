function BST(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


BST.prototype.preTraverse = function(root){
    if (root){
        console.log(root.val);
        return(preTraverse(root.left)
    }
}

// Random callback function
// function AlertThisLater(message, timeout)
// {
//     function my_fn() {console.log(message);}
//     setTimeout(my_fn, timeout);
// }
//
// AlertThisLater("Hello, World!", 2000);
