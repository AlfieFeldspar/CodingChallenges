function getSecondLargest(nums) {
  nums.sort((a, b) => b - a);
  let largest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < largest) {
      return nums[i];
    }
  }
}
