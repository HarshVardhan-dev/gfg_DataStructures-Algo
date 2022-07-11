/**
 *
 * Given a rod of length N meters, and the rod can be cut in only 3 sizes A, B and C.
 * The task is to maximizes the number of cuts in rod.
 * If it is impossible to make cut then print -1.
 *
 *
 */

function maxPieces(N, a, b, c) {
  if (N === 0) return 0;
  if (N < 0) return -1;

  let res = Math.max(
    maxPieces(N - a, a, b, c),
    maxPieces(N - b, a, b, c),
    maxPieces(N - c, a, b, c)
  );
  if (res === -1) {
    return -1;
  } else {
    return res + 1;
  }
}

// Example Demonstration

console.log(maxPieces(17, 11, 10, 3));
console.log(maxPieces(10, 9, 7, 11));
