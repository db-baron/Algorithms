var exports = module.exports = {};

function BST(){
    this.root = null;
}

function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.add = function(val) {
    if (this.root == null){
        this.root = new BTNode(val);
    } else {
        var runner = this.root;
        var done = false;
        while (!done){
            if(val >= runner.val){
                if (runner.right == null){
                    runner.right = new BTNode(val);
                    done = true;
                } else {
                    runner = runner.right;
                }
            }
            else {
                if (runner.left == null){
                    runner.left= new BTNode(val);
                    done = true;
                } else {
                    runner = runner.left;
                }
            }
        }
    }
}

// Contains method. Find if the tree contains a val
BST.prototype.contains = function(val, root){
    var runner = this.root
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


var my_BST = new BST();
my_BST.add(10);
my_BST.add(15);
my_BST.add(8);
my_BST.add(4);
console.log(my_BST);

console.log(my_BST.contains(15, my_BST.root))

// Export to binarySearch_swap.js
module.exports = BST;
