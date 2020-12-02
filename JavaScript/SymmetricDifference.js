// Finding the overlap between two arrays
/**
function sym(arr1, arr2) {
  let sames = [];
  arr1.forEach((el1) => {
      console.log('el1 ',el1)
    arr2.forEach((el2) => {
        console.log('el2 ',el2)
      if (el1 === el2) {
        sames.push(el1);
      }
    });
  });
  return sames;
}

sym([1, 2, 3], [5, 2, 1, 4]);

let results = sym([1, 2, 3], [5, 2, 1, 4]);
console.log(results);
*/

function sym() {
    var args = [];
    // "arguments" is an array-like object that can be used 
    // with any NON-ARROW function to grab its arguments
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    function symDiff(arrayOne, arrayTwo) {
      var result = [];
  
      arrayOne.forEach(function(item) {

        /**The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. */
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach(function(item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  
    // Apply reduce method to args nested array, using the symDiff function
    return args.reduce(symDiff);
  }

let results2 = sym([1, 2, 3], [5, 2, 1, 4]);
console.log(results2);
