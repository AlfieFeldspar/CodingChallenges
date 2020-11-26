/**The idea is to use a for loop
 * 
 * Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need to traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even. */

function pickIt(arr){
    var odd=[],even=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0) {
      even.push(arr[i]);
    } else {odd.push(arr[i])}
  }  
    return [odd,even];
  }