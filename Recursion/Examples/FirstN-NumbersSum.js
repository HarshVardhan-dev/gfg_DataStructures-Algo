/**
 * Sum of  First N Natural Numbers Using the Recursion
 */

function recSum(n) {
  if (n == 0) {
    return 0;
  }

  return n + recSum(n - 1);
}

console.log(recSum(4));
