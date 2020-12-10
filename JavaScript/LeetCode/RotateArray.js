
// This response did not work on the platform. 
const rotate = (nums, k) => {
    let rotatedOrder = nums.splice(nums.length-k, k)
    // console.log(rotatedOrder);
    
    console.log ([...rotatedOrder, ...nums])

};
rotate([1,2,3,4,5,6,7], 3)


