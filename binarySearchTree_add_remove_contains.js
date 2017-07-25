function BST(){
    this.root = null;
}

function BTNode(val){
        this.val = val;
        this.left = null;
        this.right = null;
}

BTNode.prototype.add = function(val) {
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

BTNode.prototype.remove = function(val, root){
    var runner = this.root;
    while (runner){
    // compare the node's value with the value
        if (value < runner.val) {
            // check if there is a left node
            if ( runner.left ) {
                runner.left = this.remove( value, node.left );
            }
        }
    }
}



// Contains method. Find if the tree contains a val
BTNode.prototype.contains = function(val, root){
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


var my_BTNode = new BTNode();
my_BTNode.add(10);
my_BTNode.add(15);
my_BTNode.add(8);
my_BTNode.add(4);
console.log(my_BTNode);

console.log(my_BTNode.contains(15, my_BTNode.root))
