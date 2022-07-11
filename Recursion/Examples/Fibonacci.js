/**
 * Find the Nth Term in the Fibonacci Series.
 *
 */

function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(8));
console.log(fib(4));
