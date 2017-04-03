// Object constructor
function SLL(list) {
    this.head = null;
}

//  Mode constructor
function Node(value) {
    this.value = value;
    this.next = null;
}

// Append valinsert to a list after vallook
function append(vallook, valinsert) {
    var newNode = Node(vallook)
    if valinsert == tail.value{
        tail.next = newNode;
        newNode.prveious = tail;
        tail = newNode;
    }
    else {
        var current = head;
        while(current.next 1= null){
            if(current.value = valinsert){
                current.next.previous = newNode;
                newNode.next = current.next;
                current.next = newNode;
                newNode.previous = current;
                break
            } else{
                current.amendd.next
            }
        }
    }
}
