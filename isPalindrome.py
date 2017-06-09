### Determine if word is a palndrome
class Palindrome:
    @staticmethod
    def is_palindrome(word):
        for i in range(0, (len(word) + 1) / 2):
            if word[i] != word[len(word)-i-1]:
                return False
        return True

print(Palindrome.is_palindrome('level'))



### An even shorter way of writing the function
def palindrome(num):
    return num == num[::-1]

print(palindrome('otto'))
