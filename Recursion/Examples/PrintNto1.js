/**
 *
 * Print the Numbers from N to 1 using Recursion
 *
 */

function Print(n) {
  if (n == 0) {
    return;
  }

  console.log(n);
  Print(n - 1);
}

Print(10);
