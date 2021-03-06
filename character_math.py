# 3[ab] should return 'ababab'
# a[3[bc]] should return abcbcbc
# 2[ab[cd]] should return 'abcdabcd'

# Use a stack data structure to solve this


class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

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
    # Create stack
    for i in charstr:
        myStack.push(i)
    # Start destacking and building substring from characters within brackets
    for m in range(myStack.length() - 2):
        destacked = myStack.pop()
        print "destacked is ", destacked
        # We want to start with the inner-most right bracket
        if type(int(destacked)) == int:
            substring = substring*int(destacked)
        if destacked not in ["[", "]"]:
            substring += destacked
        if destacked == "[":
            substring = substring[::-1]
            print "Found a [, substring is ", substring
            
        final_output += substring
    return "Final output is ", final_output

myStack = Stack()
# 3[ab[cd]] should return 'abcdabcd'
sample_str = '2[ab[cd]]'
print(character_math(sample_str))

#
# Input = "2[ab[cd]]"
#
# def Treatment(STR):
#
#     # Exit the treatment. That's the end condition.
#     if "[" not in STR:
#         return STR
#
#     # Find the inner [], in this case, the "cd" part
#     Bound1_ID = len(STR) - STR[::-1].index("[") - 1
#     Bound2_ID = STR.index("]")
#
#     # Separate STR into : First_part + middle between [] + Last_part
#     Last_part = STR[Bound2_ID + 1:]
#
#     # First_part depends if there is a number or not
#     try:
#         Multiplier = int(STR[Bound1_ID - 1])
#         First_part = STR[:Bound1_ID - 1]
#     except:
#         Multiplier = 1
#         First_part = STR[:Bound1_ID]
#
#     Middle_part = STR[Bound1_ID + 1: Bound2_ID] * Multiplier
#
#     # Assemble the new STR :
#     New_STR = First_part + Middle_part + Last_part
#
#     # Recursive command, repeat the function on the new STR
#     return Treatment(New_STR)
#
# print (Treatment(Input))
