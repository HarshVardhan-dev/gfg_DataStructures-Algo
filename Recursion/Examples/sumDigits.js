/**
 * Find the Sum of Digits for the Given Number
 *
 *
 *  Hint for the Given Problem.
 *
 *  n % 10  = It Gives the last digit from the Number.
 *  n / 10 =  Removes the last digit from the Number.
 *
 */

function SumDigits(n) {
  if (n == 0) {
    return 0;
  }
  return SumDigits(parseInt(n / 10)) + (n % 10);
}

console.log(SumDigits(253));

// Here is the Iterative Solution for the Same

function sumDigitIter(n) {
  let res = 0;

  while (n > 0) {
    res = res + (n % 10);
    n = parseInt(n / 10);
  }
  return res;
}

console.log(sumDigitIter(873));
