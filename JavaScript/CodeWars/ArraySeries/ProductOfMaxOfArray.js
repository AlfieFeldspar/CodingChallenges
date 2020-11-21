/**Given an array/list [] of integers, find the product of the k maximal numbers. 
 * Array/list size is at least 3 .
 * Array/list's numbers Will be mixture of positives , negatives and zeros
 * Repetition of numbers in the array/list could occur.
*/

const maxProduct = (array, numToMultiply) => {
    array.sort((a,b) => a-b);
    let toMultiply = array.slice(array.length-numToMultiply)
    let product = toMultiply.reduce(function(acc,curr) {
        return(acc * curr);        
    })
    return product;
}

let results = maxProduct([10,8,7,9], 3)
console.log(results)

//refactored
const maxProduct2 = (array, numToMultiply) => {
    return array.sort((a,b) => a-b).slice(array.length-numToMultiply).reduce((acc,curr) =>
        (acc * curr)       
    )
}

let results = maxProduct([10,8,7,9], 3)
console.log(results)