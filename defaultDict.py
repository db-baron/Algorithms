# Instructions at https://www.hackerrank.com/challenges/defaultdict-tutorial

"""
Run this program with a redirect to an input file like so:
$ python defaultDict.py < test.txt

"""

# Instructions at https://www.hackerrank.com/challenges/defaultdict-tutorial
#
import sys
from collections import defaultdict

# Both of these methods work
n, m = input().split()
# n, m = sys.stdin.readline().split()

# print (type(n),' ',type(m))

n = int(n)
m = int(m)

a = defaultdict(list)
for i in range(1, n + 1):
    a[input()].append(i)

for i in range(1, m + 1):
    key = input()
    if len(a[key]) > 0:
        jjaguar = " ".join(str(c) for c in a[key])
        # print (jjaguar)

    else:
        print (-1)

sys.stdout.write(jjaguar)

# input format of data is somewhat unclear
# my_input = "5 2\na\na\nb\na\nb\na\nb"
