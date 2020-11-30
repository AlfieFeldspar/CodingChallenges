/**Write a function that combines two arrays by alternatingly taking elements from each array in turn. */
function mergeArrays(a, b) {
    let merge = [];
    let longerArray = a.length > b.length ? a : b;
    for (let i = 0; i < longerArray.length; i++) {
      if (a[i]) {merge.push(a[i])};
      if (b[i]) {merge.push(b[i])};
    }
    return merge;
  }

let results = mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]);
console.log(results);
