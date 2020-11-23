/**An element is leader if it is greater than The Sum all the elements to its right side. Given an array/list [] of integers , Find all the LEADERS in the array. 
Return array of leaders*
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list */

const arrayLeaders = (numbers, leaders = []) => {
  for (let i = 0; i < numbers.length; i++) {
    // if (i === numbers.length - 1 && numbers[i] > 0) {
    //   leaders.push(numbers[i]);
    //   return leaders;
    // }
    // if (i === numbers.length - 1 && numbers[i] <= 0) {
    //   return leaders;
    // }

    // Adding '0' as 'initial value' (second argument in reducer) eliiminates 
    // need for lines 13-19. 
    // "Calling reduce() on an empty array without an initialValue will throw a
    // TypeError." - MDN
    if (numbers[i] > numbers.slice(i + 1).reduce((acc, curr) => acc + curr, 0)) {
      leaders.push(numbers[i]);
    }
  }
  return leaders;
};

let results = arrayLeaders([1,2,3,4,0]);
console.log(results);
