# Count all the occuring characters(UTF-8) in string.
 # If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

from collections import defaultdict

def count(string):
    my_dict = defaultdict(int)
    for char in string:
        if char in ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"):
            my_dict[char] += 1
    return my_dict

## A Somewhat More Cumbersome Method
# def count(string):
#     my_dict = {}
#     for char in string:
#         char = char.lower()
#         if char in ("abcdefghijklmnopqrstuvwxyz"):
#             if char in my_dict:
#                 my_dict[char] += 1
#             else:
#                 my_dict[char] = 1
#
#     return my_dict

print(count("1c3b54B2"))
