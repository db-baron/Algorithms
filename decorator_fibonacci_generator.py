# Make a generator that outputs the fibonacci sequence of numbers and
# use a decorator function to remember the fibonacci numbers that have been computed

# def cache(function):
#     cached_values = {} # Stores already computed fibonacci values
#     def wrapping_function(*args):
#         if args not in cached_values:
#             # Call the function only if we haven't already done it for those parameters
#             cached_values[args] = function(*args)
#         return cached_values[args]
#     return wrapping_function
#
# @cache
# def fibonacci(n):
#     print ("calling fibonacci(%d)" % n)
#     if n < 2:
#         return n
#     return fibonacci(n-1) + fibonacci(n-2)
#
# print([fibonacci(n) for n in range(1,6)])
def decorator(fn):
    def inner(n):
        return fn(n)+1
    return inner

@decorator
def f(n):
    return n + 1

print f(7)
