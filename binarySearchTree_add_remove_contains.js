// Assign the functions BST and BTNode to vars for late module.exports
var BST = function BST(){
    this.root = null;
}

var BTNode = function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


BST.prototype.add = function(val) {
    if (this.root == null){
        this.root = new BTNode(val)
    } else {
        var runner = this.root;
        var done = false;
        while (!done){

            if(val >= runner.val){
                if (runner.right == null){
                    runner.right = new BTNode(val)
                    done = true
                } else {
                    runner = runner.right;
                }
            }
            else {
                if (runner.left == null){
                    runner.left= new BTNode(val)
                    done = true;
                } else {
                    runner = runner.left;
                }
            }
        }
    }
}

BST.prototype.remove = function(val, root){
    var runner = this.root;
    while (runner){
    // Compare the node's value with the value
        if (val < runner.val) {
            // Check if there is a left node
            if ( runner.left ) {
                runner.left = this.remove(val, node.left );
            }
            // Check if there is a right node
            if ( runner.right ){
                runner.right = this.remove(val, node.right);
            }
        }
    }
}


// Contains method. Find if the tree contains a value
BST.prototype.contains = function(val, root){
    var runner = this.root;
    while (runner){
        if (runner.val == val){
            return true;
        }
        else if (runner.val < val){
            runner = runner.right;
        }
        else {
            runner = runner.left;
        }
    }
    return false;
}


// var my_BTNode = new BTNode();
var my_BST = new BST();
my_BST.add(10);
my_BST.add(15);
my_BST.add(8);
my_BST.add(4);
console.log(my_BST);

console.log(my_BST.contains(15, my_BST.root));
// console.log(my_BTNode.remove(15, my_BTNode.root));


module.exports.BST = BST;
module.exports.BTNode = BTNode;
