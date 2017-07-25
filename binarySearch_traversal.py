# Binary tree traversals (Pre-order, Post-order, In-order)

# Node class will represent an individual node in a Binary Tree
class Node:
	def __init__(self,key):
		self.left = None
		self.right = None
		self.val = key

# A function to do postorder tree traversal
def printPreorder(root):

	if root:
		# First print the data of node
		print(root.val),
		# Then recursive call on left child
		printPreorder(root.left)
		# Finally recursive call on right child
		printPreorder(root.right)

# A function to do inorder tree traversal
def printInorder(root):

	if root:
		# First recursive call on left child
		printInorder(root.left)
		# then print the data of node
		print(root.val),
		# now recursive call on right child
		printInorder(root.right)

# A function to do postorder tree traversal
def printPostorder(root):

	if root:
		# First recursive call on left child
		printPostorder(root.left)
		# the recursive call on right child
		printPostorder(root.right)
		# now print the data of node
		print(root.val),



# Create Binary Tree (Note, it's not a BST because all left nodes aren't less than their parent)
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
print("Preorder traversal of binary tree is")
printPreorder(root)

print("\nInorder traversal of binary tree is")
printInorder(root)

print("\nPostorder traversal of binary tree is")
printPostorder(root)
