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


// Find the tree's height (i.e. depth), aka the longest branch
BTNode.prototype.height = function(){
    var left = 0
    var right = 0
    if (this.left){
        var left = this.left.height();
    }
    if (this.right) {
        var right = this.right.height();
    }
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }
}
// Need to do a prototype for BST
BST.prototype.height = function(){
    if (this.root) {
        return this.root.height();
    }
}

var my_BST = new BST();
my_BST.add(10);
my_BST.add(15);
my_BST.add(8);
my_BST.add(4);
my_BST.add(3);
my_BST.add(1);

console.log(my_BST)
console.log(my_BST.height())
