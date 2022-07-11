/**
 *
 * Find whether the String is Palindrome using Recursion Technique
 *
 */

function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }

  return str[start] == str[end] && isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("acca", 0, 3));
