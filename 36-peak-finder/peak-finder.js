  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

const peakFinder = function(nums) {
  let peak = -Infinity;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > peak) {
      peak = nums[i];
    }
  }
  return peak;
};
