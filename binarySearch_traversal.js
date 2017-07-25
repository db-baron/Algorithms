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
// BST.prototype.preTraverse = function(root){
//     if (root){
//         console.log(root.val);
//         return(preTraverse(root.left)
//     }
// }

function AlertThisLater(message, timeout)
{
    function fn() { console.log(message); }
    setTimeout(fn, timeout);
}

AlertThisLater("Hello, World!", 5000);
