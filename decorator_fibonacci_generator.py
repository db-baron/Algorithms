# Make a generator that outputs the fibonacci sequence of numbers and
# use a decorator to remember the fibonacci numbers that have been computed

def cache(function):
    cached_values = {} # Stores already computed fibonacci values
    def wrapping_function(*args):
        if args not in cached_values:
            # Call the function only if we haven't already done it for those parameters
            cached_values[args] = function(*args)
        return cached_values[args]
    return wrapping_function        

def fibonacci_generator(a, b):
    while True:
        yield a
        a ,b = b, a+b

# Print all the numbers of the Fibonacci sequence that are lower than 1000
for i in fibonacci_generator(0, 1):  # set 0 and 1 as the start points
    if i > 15:
        break
    print(i)
