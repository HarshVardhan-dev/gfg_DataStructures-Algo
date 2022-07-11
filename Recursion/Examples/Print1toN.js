/**
 *
 * Print the Numbers from 1 to N using Recursion.
 *
 *
 */

function Print(n) {
  if (n == 0) {
    return;
  }
  Print(n - 1);
  console.log("Number", n);
}

Print(5);
