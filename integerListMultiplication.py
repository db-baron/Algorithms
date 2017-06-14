# Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.
#For example, given:  [1, 3, 4]
#your function would return:  [12, 4, 3]


def intList(list):
    front = [None] * len(list)
    # for each integer, find the product of all the integers
    # before it, storing the total product so far each time

    product_so_far = 1
    for i in xrange(len(list)):
        front[i] = product_so_far
        product_so_far *= list[i]





my_list = [1, 3, 4]

intList(my_list)
