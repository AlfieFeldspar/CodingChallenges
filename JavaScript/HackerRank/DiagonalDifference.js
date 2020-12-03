/**Given a square matrix, calculate the absolute difference between the sums of its diagonals. Input is n (number of rows and columns) and a square matrix (arr).
11 2 4
4 5 6
10 8 -12

|(11+5+-12)-(10+5+4)| = |4-19| = |-15| = 15
 */

function diagonalDifference(arr) {
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i] - arr[i][n - 1 - i];
  }
  return sum >= 0 ? sum : sum * -1;
}

// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += arr[i][i] - arr[i][n - 1 - i];
// }
// console.log(sum >= 0 ? sum : sum * -1);

// var sum = 0;
// for(var i = 0; i<n; i++){
//     sum += arr[i][i];
//     sum -= arr[i][n-i-1];
// }
// console.log(Math.abs(sum));
