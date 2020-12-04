/**Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let i = arr.length; i > 1; i--) {
    max += arr[i - 1];
  }
  return console.log(min + " " + max);
}
miniMaxSum([11, 25, 3, 77, 1]);
