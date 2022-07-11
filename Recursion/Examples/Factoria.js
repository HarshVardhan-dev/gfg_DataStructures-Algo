/**
 *
 * Write the Code for the Factorial of Number using Recursion.
 *
 */

function Fact(n) {
  if (n == 1) {
    return 1;
  }

  return n * Fact(n - 1);
}

console.log(Fact(5));
