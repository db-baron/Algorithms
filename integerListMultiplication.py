# Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products
#For example, given:  [2, 4, 10] your function would return:  [40, 20, 8]
# or [2,3,4,1] would return [12,8,6,24]

# Execution is O(n) time and O(n)O(n) space.
    # Two passes are made through the input list (shouldn't it be O(n)O(n) time then?)
    # The products_list that's built has the same length as the input list.
def intList(list):
    if len(list) < 2:
        return "Getting the product of numbers at other indices requires at least 2 numbers"

    # Make a list with the length of the input list to hold the products
    products_list = [None] * len(list)

    # For each integer, find the product of all the integers before it, storing the total product_so_far each time
    product_so_far = 1
    i = 0
    while i < len(list):
        products_list[i] = product_so_far
        product_so_far *= list[i]
        print product_so_far
        print "i is ", i
        print "product_list is ", products_list
        i += 1
    print "end of first while"
    product_so_far = 1
    i = len(list) - 1
    while i >= 0:
        products_list[i] *= product_so_far
        product_so_far *= list[i]
        print product_so_far
        print "i is ", i
        print "product_list is ", products_list
        i -= 1
    return products_list

my_list = [2, 4, 10]
# my_list = [2,3,4,1]
print intList(my_list)
