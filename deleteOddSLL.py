class Node:
    def __init__(self, initial_val):
        self.value = initial_val
        self.next = None

    def get_next(self):
        return self.next

    def set_next(self, new_next):
        self.next = new_next

    # Necessary because you can't do next.val
    def get_value(self):
        return self.value

    def set_value(self, newval):
        self.value = newval

# temp = Node(213)
# print temp.get_value()

class SLL:
    def __init__(self):
        self.head = None

    def isEmpty(self):
        return self.head == None # returns True if there's no head, i.e. there's not linked list

    def search(self, val):
        current = self.head
        node_count = 1
        while current:
            if current.get_value() == val:
                return "Found val at node: ", node_count
            else:
                current = current.get_next()
                node_count += 1
        return "Could not find value in linked list"

    def add(self, val):
        temp = Node(val)
        temp.set_next(self.head)  # Place the new node ahead of the head node
        self.head = temp    # Re-assign the temp as the head node

    def delete(self, val):
        current = self.head
        previous = None
        found = False
        while current:
            if current.get_value() == val:
                if previous is None:
                    self.head = current.get_next()
                else:
                    previous.set_next(current.get_next)
                return "Deleted node with value: ", val
            else:
                previous = current
                current = current.get_next()
        return "Value not in list"

    def deleteOdd(self):
        current = self.head
        previous = None
        while current.get_next():
            if current.get_value() % 2 != 0:
                if previous is None:
                    self.head = current.get_next()
                else:
                    previous.set_next(current.get_next)
                print "Deleted a node with an odd value"
            previous = current
            current = current.get_next()

SLL = SLL()
SLL.add(12)
SLL.add(4)
SLL.add(23)
SLL.add(40)
SLL.add(9)
SLL.delete(50)
print SLL.search(12)
SLL.deleteOdd()
print SLL.search(12)
