/*
 * Complete the 'getUmbrellas' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER requirement
 *  2. INTEGER_ARRAY sizes
 */

function getUmbrellas(requirement, sizes) {
    // Write your code here
    if (sizes.length === 0) {
        return "-1";
    }
    // console.log(requirement, sizes)
    sizes.sort((a, b) => b - a);
  //   console.log(sizes);
    for (let i = 0; i < sizes.length; i++) {
      // console.log(sizes[i]);
      if (sizes[i] === requirement) {
      //   console.log("Match!");
        return "1";
      } else {
        if (requirement % sizes[i] === 0) {
          return requirement / sizes[i];
        }
      }
    }
      return "-1";
  }
  //passed 10 of 12

  function getUmbrellas(requirement, sizes) {
    // Write your code here  
    if (sizes.length === 0) {
        return "-1";
    }
    // console.log(requirement, sizes)
    sizes.sort((a, b) => b - a);
  //   console.log(sizes);
    for (let i = 0; i < sizes.length; i++) {
      // console.log(sizes[i]);
      return sizes[i] === requirement
       ? "1"
       : requirement % sizes[i] === 0
       ? requirement / sizes[i]
       : "-1"
      }
  }
  //passed 8 of 12
