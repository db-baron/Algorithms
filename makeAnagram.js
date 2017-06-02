// From hackerrank.com https://www.hackerrank.com/challenges/ctci-making-anagrams
  // Given two strings a and b that may or may not be of the same length, determine
  // the minimum number of character deletions required to make strings a and b anagrams.

function createAnagram(stringa, stringb) {
    var a = stringa.split("");
    var b = stringb.split("");
    var count = a.length + b.length;
    var pair = 0;

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] == b[j]){
                b.splice(j, 1);
                pair++;
                break;
            }
        }
    }
    // Return how many characters you had to delete from one string
    return count - (pair*2);
}


console.log(createAnagram("pppbde", "bde"));
