# Make a generator that outputs the fibonacci sequence of numbers 

def fibonacci_generator(a, b):
    while True:
        yield a
        a ,b = b, a+b

# Print all the numbers of the Fibonacci sequence that are lower than 1000
for i in fibonacci_generator(0, 1):  # set 0 and 1 as the start points
    if i > 15:
        break
    print(i)
