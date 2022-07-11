/**
 *  In this function we are going to print all the subsets for the Following Type.
 */
let subs = [];
function subsets(str, curr, index) {
  if (index == str.length) {
    console.log(curr);
    subs.push(curr);
    return;
  }
  subsets(str, curr, index + 1);
  subsets(str, curr + str[index], index + 1);
}
subsets("abc", "", 0);
console.log(subs);
