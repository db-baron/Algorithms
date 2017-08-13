# Generate the following structure where the number of characters
# in the first and last rows is equal to the user input value, n
# @@@@@
#  @@@
#   @
#   @
#  @@@
# @@@@@

def hourglass(n):
    x = n
    LS = ""
    RS = ""
    for i in range(n):
        print(LS + "@"*x + RS)
        if x <= 2:
            break
        x -= 2
        LS += " "
        RS += " "
    marker = 0
    while(x<=n):
        print(LS[marker:] + "@"*x + RS[:-marker])
        x += 2
        marker += 1
    print("Done")

print(hourglass(6))
