def to_nato(words):
    dictionary = {'A':'Alfa', 'B':'Bravo','C':'Charlie', 'D':'Delta', 'E':'Echo', 'F':'Foxtrot', 'G':'Golf', 'H': 'Hotel', 'I':'India', 'J':'Juliett', 'K':'Kilo', 'L':'Lima', 'M':'Mike', 'N':'November', 'O':'Oscar', 'P':'Papa', 'Q':'Quebec', 'R':'Romeo', 'S':'Sierra', 'T':'Tango', 'U':'Uniform', 'V':'Victor', 'W':'Whiskey', 'X':'Xray', 'Y':'Yankee', 'Z':'Zulu'}
    nato_phrase = []
    if type(words) is str:
        nato_phrase = dictionary[words[0]]
        for letter in words[1:]:
            if letter != " ":
                letter = letter.upper()
                if letter not in dictionary:
                    continue
                else:
                    nato_phrase += " " + dictionary[letter]
    else:
        return "words must be a string"
    return nato_phrase


my_string = 'Did not see that coming'
print to_nato(my_string)
