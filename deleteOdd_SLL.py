class node:
    def __init__(self):
        self.value = None
        self.next = None

class my_SLL:
    def __init__(self):
        self.currentnode = None

    def node_add(self, value):
        new_node = node()
        new_node.value = value
        new_node.next = self.currentnode
        self.currentnode = new_node


    def deleteOdd(self):
        node = self.currentnode
        while node.next:
            if node.value % 2 != 0:
                if node.next.next:
                    node.next = node.next.next
                else:
                    node.next = None
            node = node.next

my_SLL = my_SLL()
my_SLL.node_add(1)
my_SLL.node_add(2)
my_SLL.node_add(3)

my_SLL.deleteOdd()
