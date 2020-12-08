/**Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
OUTPUT FORMAT: Print the following  lines, each to  decimals:
proportion of positive values
proportion of negative values
proportion of zeros
*/

// first try
function plusMinus(arr) {
    let pos = 0; 
    let neg = 0;
    let zero = 0;
    for (let i = 0; i<arr.length; i++) {
      arr[i] > 0 ? pos++ : arr[i] <0 ? neg++ : zero++;   
    }
    
    return console.log ((pos/arr.length).toPrecision(6) + '\n' + (neg/arr.length).toPrecision(6) + '\n' + (zero/arr.length).toPrecision(6))
}

// second try
function plusMinus(arr) {
    let pos = (arr.filter((number) => number>0).length/arr.length).toPrecision(6);
    let neg = (arr.filter((number) => number<0).length/arr.length).toPrecision(6);
    let zero = (arr.filter((number)=>number ===0).length/arr.length).toPrecision(6)
    
    return console.log (pos + '\n' + neg + '\n' + zero)
}