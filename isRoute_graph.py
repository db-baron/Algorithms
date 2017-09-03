# Problem 4.1 in Cracking the Coding Interview. Given a graph, determine if a route exists from one node to another.
# The graph is represented as a dictionary, node 1 is connected to nodes 2 and 3, etc.
m = {'1':[2,3],
     '2':[1],
     '3':[4],
     '4':[1,2]}

# m is the graph, a is the starting point, b is the destination
visited_nodes = [] # To prevent 'RecursionError: maximum recursion depth exceeded' error
def isRoute(m, a, b):
    for i in m[str(a)]:
        if i == b:
            return True
        else:
            if i not in visited_nodes:
                visited_nodes.append(i)
                return isRoute(m, i, b)
    return False
print(isRoute(m, 1, 4))
