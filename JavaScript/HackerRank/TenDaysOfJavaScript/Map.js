/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
 let result = nums.map(num => {
        return num%2===0?num*2:num*3;
    })
    console.log(result)
}

modifyArray([1,2,3,4,5])

// Optimized
function modifyArray(nums) {
    return nums.map(num => num = (num%2===0)?num*2:num*3);
   }