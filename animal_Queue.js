// Create two queues for an animal shelter, one for cats, one for dogs, as well as three dequeue functions
  // 1. Dequeue the cat that's been in the queue the longest
  // 2. Dequeue the dog that's been in the queue the longest
  // 3. Dequeue the animal that's been in the queue the longest, regardless of whether it's a cat or dog

  //Global helper function for checking correctness of singly-linked lists, copied from past algo assignment
var SLLchecker = function(SLL) {
    if (SLL.head == null){
        console.log("This SLL has no nodes (i.e., is empty)")
        return false
    }
    else{
        runner = SLL.head
        counter = 1
        while (runner != null){
            console.log("For node " + counter + ", value is " + runner.timestamp)
            runner = runner.next
            counter += 1
        }
    }
}


function AnimalQ(){
      this.head = null;
      this.tail = null;
}

function Node(value){
    this.next = null;
    this.timestamp = value;
}

AnimalQ.prototype.enqueue = function(species){
    if(!this.head){
        this.head = new Node(species);
        this.tail = this.head;
        return this.tail;
    }
    this.tail.next = new Node(species);
    this.tail = this.tail.next;
    return this.tail;
}

AnimalQ.prototype.dequeue = function(){
    var adopted = this.head;
    this.head = this.head.next;
    return adopted;
}


function Shelter(){
    this.dogQ = new AnimalQ();
    this.catQ = new AnimalQ();
}

// The Shelter.prototype.enqueue function checks for species before calling AnimalQ.prototype.enqueue function to queue the new animal
Shelter.prototype.enqueue = function(species, timestamp){
    if (species == "dog"){
        this.dogQ.enqueue(timestamp);
    } else if (species == "cat") {
        this.catQ.enqueue(timestamp);
    }
}

Shelter.prototype.dequeueAny = function(){
    if (this.dogQ.head.timestamp < this.catQ.head.timestamp){
        this.dogQ.dequeue();
    } else if (this.dogQ.head.timestamp > this.catQ.head.timestamp){
        this.catQ.dequeue();
    }
}

Shelter.prototype.dequeueCat = function(){
    this.catQ.dequeue();
}

Shelter.prototype.dequeueDog = function(){
    this.dogQ.dequeue();
}


var my_shelter = new Shelter();

my_shelter.enqueue("cat", 2);
my_shelter.enqueue("dog", 5);
my_shelter.dequeueAny();
// my_shelter.dequeueCat();
console.log("dogQ is")
SLLchecker(my_shelter.dogQ)
console.log("catQ is")
SLLchecker(my_shelter.catQ)
