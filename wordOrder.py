# Given a list of words in which word may repeat.
# For each word, output its number of occurrences.
# Output order should correspond with the input order of appearance of the word.

my_words = "4\nbcdef\nabcdefg\nbcde\nbcdef"
sentinel = ''
for line in iter(raw_input, sentinel):


def wordOrder(wordlist):
    wordlist = wordlist.split("\n")
    wordnum = wordlist.pop(0)
    wordcount = {}
    for word in wordlist:
        if word not in wordcount.keys():
            wordcount[word] = 1
        else:
            wordcount[word] += 1
    return wordcount

print wordOrder(my_words)
