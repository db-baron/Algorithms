# Given a string, return the first character that has a repeat.
# Note- in the string "abcba" the function should return a, not b

def  firstRepeatingLetter(s):
    if type(s) != str or (256 < len(s) <= 0):
        return "Please enter valid string"
    mydict = {}
    first = float('inf')
    firstletter = None
    for i in str(s):
        if i.lower() in "abcdefghijklmnopqrstuvwxyz":
            if i in mydict:
                mydict[i] += 1
                if mydict[i] >1:
                    mydict[i] += 1
                    if s.index(i) < first:
                        first = s.index(i)
                        firstletter = i
            else:
                mydict[i] = 1

    if firstletter != None:
        return firstletter
    else:
        return "No duplicates"

mys = "abcba"
print firstRepeatingLetter(mys)
