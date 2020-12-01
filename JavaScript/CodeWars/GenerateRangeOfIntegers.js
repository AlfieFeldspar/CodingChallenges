/**Implement a function named generateRange(min, max, step) which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
 * Returns an array
 * Max does not need to be in the range, depending on the step*/

function generateRange(min, max, step) {
  let answer = [];
  for (let i = min; i <= max; i+=step) {
    answer.push(i);
  }
  return answer;
}

let results = generateRange(2, 10, 2);
console.log(results);
