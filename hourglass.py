# Generate the following structure where the number of characters
# in the first and last rows is equal to the user input value, n
# @@@@@
#  @@@
#   @
#   @
#  @@@
# @@@@@

def hour(n):
    i = n
    LS = ""
    RS = ""
    while(i>=1):
        print(LS + "@"*i + RS )
        i -= 2
        LS += " "
        RS += " "
    while(i<=n):
        print(LS + "@"*i + RS)
        i += 2
        LS.strip(" ")
        RS.strip(" ")
print(hour(5))


# def pyramid(rows=8):
#   for i in range(rows):
#       print ' '*(rows-i-1) + '*'*(2*i+1)
