# Instructions at https://www.hackerrank.com/challenges/defaultdict-tutorial
#
from collections import defaultdict

n, m = raw_input().split()

a = defaultdict(list)
for i in range(1, n + 1):
    a[raw_input()].append(i)

for i in range(1, m + 1):
    key = raw_input()
    if len(a[key]) > 0:
        print (" ").join(str(c) for c in a[key])
    else:
        print -1


# input format of data is somewhat unclear
# my_input = "5 2\na\na\nb\na\nb\na\nb"
