function SLL(){
    this.head = null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

SLL.prototype.add = function(value) {
    var node = new Node(value);
    var currentNode = this.head;

    if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
    }
}
