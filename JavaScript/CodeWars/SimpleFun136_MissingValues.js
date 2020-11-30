/**You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

Your task is to find x * x * y. */

function missingValues(arr) {
  let counts = {};
  let twice, once;
  arr.forEach((el) => {
    counts[el] = counts[el] ? (counts[el] += 1) : 1;
  });
  for (let key in counts) {
    if (counts[key] === 2) {
      twice = key;
    }
    if (counts[key] === 1) {
      once = key;
    }
  }
  return Math.pow(once, 2) * twice;
}

let result = missingValues([1, 1, 1, 2, 2, 3]);
console.log(result);


//Refactored solution from code wars responses: 
/**
 function missingValues(arr) {
 const x = arr.find(item => arr.filter(element => element === item).length === 1);
 const y = arr.find(item => arr.filter(element => element === item).length === 2);
 return x * x * y
} */