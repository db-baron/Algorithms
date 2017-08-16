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

def is_number(s):
    try:
        int(s)
        return True
    except ValueError:
        return False


def character_math(charstr):
    final_output = ""
    substring = ""
    multiplier = None
    for i in charstr:
        myStack.push(i)

    for m in range(myStack.length()-2):
        print ("m is ", m)
        destacked = myStack.pop()
        # We want to go to the inner-most right bracket
        if destacked != "]":
            substring += destacked
            print ('substring is ', substring)
        if destacked == "[":
            possible_multiplier = myStack.pop()
            print("possible_multiplier is ", possible_multiplier)
            print("possible_multiplier is a number", is_number(possible_multiplier))
            if is_number(possible_multiplier):
                # print("IIIIIINNNN")
                print ("Now multiplying ", possible_multiplier, " by ", substring)
                final_output += int(possible_multiplier)*substring
            else:
                final_output += possible_multiplier
        final_output += substring

    final_output = final_output[::-1]
    return "Final output is ", final_output


myStack = Stack()

# 2[a3[bc]] should output 'abcbcbcabcbcbc'
sample_str = '2[a3[bc]]'

print(character_math(sample_str))
