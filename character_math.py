# 3[ab] outputs 'ababab'
# 2[a3[bc]] outputs 'abcbcbcabcbcbc'
# 3[ab]cd outputs 'abababdc'

# Use a stack data structure to solve this
class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def view_top(self):
        return self.items[len(self.items) - 1]

    def length(self):
        return len(self.items)

myStack = Stack()
charstr = '3[ab]cd'
for i in charstr:
    myStack.push(i)

final_output = ""
substring = ""
sub_destack = ""
cont = True
for m in range(myStack.length()-1):
    destacked = myStack.pop()
    print ("destacked is ", destacked)
    if destacked == "]":
        while (cont):
            sub_destack = myStack.pop()
            if (sub_destack != "["):
                substring += sub_destack
                cont = False
        # else:
    elif (destacked != "["):
        final_output += destacked
final_output = final_output[::-1]
print(final_output)
