# Make a generator that outputs the fibonacci sequence starting at a and b
# and ending before an number s

def fibonacci_generator(a, b, s):
    # Validate inputs
    inputList = [a, b, s]
    for value in inputList:
        try:
           int(value)
        except ValueError:
           print('Enter a number, please')
           break

        while True:
            yield a
            a, b = b, a+b
            if (b>s):
                break

for i in fibonacci_generator(0, 1, 8):
    print(i)
