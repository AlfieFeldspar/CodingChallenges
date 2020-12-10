/**Terrible original directions deleted.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. 

WHAT THE QUESTION REALLY REQUIRES: 
1. Count the number of unique values
2. Front-load those unique values in the array

SOLVED BELOW using pointers*/

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let pointer1 = 0
  for (let pointer2 = 1; pointer2<nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      // increment pointer1
      pointer1++;
      //move nums[pointer2] to position nums[pointer1]
      nums[pointer1] = nums[pointer2];
    }
  }        
  // get the count by adding 1 to final position of i
  return count = pointer1 + 1;  
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
