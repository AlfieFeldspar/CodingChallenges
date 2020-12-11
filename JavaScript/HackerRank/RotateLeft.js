// this solution fails with large input
/**function rotateLeft(d, arr) {
    let rotatedOrder = [];
    if (arr.length === 0) {
        return 0;
    }
    if (d === arr.length-1) {
        rotatedOrder = arr.splice(arr.length-1, 1);
    } 
    else {
    rotatedOrder = arr.splice(arr.length-d, d);
    }
    // console.log(rotatedOrder);
    
    console.log ([...rotatedOrder,...arr]);

};
rotateLeft(4, [1, 2, 3, 4, 5]) */


// Also fails on large sets
/**function rotateLeft(d, arr) {
    let rotatedOrder2 = '';
  if (arr.length === 0) {
    return 0;
  }
  if (d === arr.length - 1) {
    rotatedOrder2 = arr.pop();
    console.log("hey");
    arr.unshift(rotatedOrder2)
    console.log(arr)
  } else {
    rotatedOrder2 = arr.splice(arr.length-d, d);
    // console.log(rotatedOrder2);
    arr.unshift(...rotatedOrder2)
    console.log(arr)
  }
}

// rotateLeft(4, [1, 2, 3, 4, 5]);
rotateLeft(10, [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51])*/


// SO SIMPLE. SO SIMPLE. Passes all tests
const rotateLeft = (d, arr) => {
    while (d) {
        arr.push(arr.shift())
        d--
    }
    console.log(arr);
}
rotateLeft(10, [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51])