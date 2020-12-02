/**Given a two-dimensional array, return a new array which carries over only those arrays from the original that were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.
 * No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.
 */
const filterHomogenous = (arrays) => {
  let resultsArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (
      arrays[i].length !== 0 &&
      (arrays[i].every((el) => typeof el === "string") ||
        arrays[i].every((el) => typeof el === "number"))
    ) {
      resultsArray.push(arrays[i]);
    }
  }
  return resultsArray;
};

let results = filterHomogenous([
  [1, 5, 4],
  ["a", 3, 5],
  ["b"],
  [],
  ["1", 2, 3],
]);
console.log(results);

// A genius refactor from code wars:
/**
function filterHomogenous(arr) {
  return arr.filter(
    (subArr) =>
      subArr.length > 0 &&
      subArr.every((val) => typeof val === typeof subArr[0])
  );
}
*/
