var longestPalindrome = function(string) {

  var result = "";

  var centeredPalindrome = function(left, right) {
      while (left >= 0 && right < string.length && string[left] === string[right] && string[left] !== " " && string[left] !== " ") {
          //expand in each direction.
          left--;
          right++;
      }
      return string.slice(left + 1, right);
  };

  for (var i = 0; i < string.length - 1; i++) {
      var oddPal = centeredPalindrome(i, i + 1);
      var evenPal = centeredPalindrome(i, i);

      if (oddPal.length > result.length)
          result = oddPal;
      if (evenPal.length > result.length)
          result = evenPal;
  }
  return "the longest palindrome is: " + result + " It's length is: " + result.length;
};

console.log(longestPalindrome("a racecar is level"));
