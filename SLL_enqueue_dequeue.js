// This is one method of doing it, you could also use SLL.prototype.enqueue
function SLL(list) {
    this.head = null;
    this.tail = null;
}

function Node(value){
    this.next = null;
    this.val = value;
}

function enqueue(list, val){
    var N = new Node(val);
    if (!list.head){
        list.head = N;
    }
    if (!list.tail){
        list.tail = N;
    } else{
    list.tail.next = N;
    list.tail = N;
    }
    return list;
}

function dequeue(list){
    if (!list.head){
        return "No head to dequeue"
    } else{
        var temp = list.head
        temp.next = null
        list.head = list.head.next;
        return temp;
    }    
}

var my_list = new SLL();

console.log(enqueue(my_list, 12));

console.log(dequeue(my_list));
console.log("my_list is ", my_list);
