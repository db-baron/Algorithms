class Node:
    def __init__(self, initial_val):
        self.value = initial_val
        self.next = None

    def get_next(self):
        return self.next

    def set_next(self, new_next):
        self.next = new_next

    def get_value(self): # Kind of useless, can just do a if next.val = valueOfInterest instead
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
            if current.value == val:
                return "Found val at node: ", node_count
            else:
                current = current.get_next()
                node_count += 1

    def add(self, val):
        temp = Node(val)
        temp.set_next(self.head)  # Place the new node ahead of the head node
        self.head = temp    # Re-assign the temp as the head node

    def delete(self, val):
        current = self.head
        previous = None
        while current.next:
            if current.get_value() == val:
                if current.next:

                else:
                    previous = current
                    current = current.next
            else:
                current = current.get_next()


SLL = SLL()
# SLL.add(12)
SLL.add(12)
SLL.add(4)
SLL.add(23)
SLL.delete(23)
# print "tea", SLL.search(23)
print SLL.search(12)
