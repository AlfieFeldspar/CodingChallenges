/**Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product . */
const minSum = (arr) => {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    let product = arr[i] * arr[arr.length - (i + 1)];
    console.log(product);
    sum += product;
  }
  return sum;
}
let result = minSum([9, 2, 8, 7, 5, 4, 0, 6]);
console.log(result);
