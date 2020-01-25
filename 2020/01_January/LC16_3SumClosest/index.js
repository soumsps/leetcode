/**
 Given an array nums of n integers and an integer target,
 find three integers in nums such that the sum is closest to target.
 Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let tempSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(tempSum - target) < Math.abs(closest - target)) {
        closest = tempSum;
      }

      if (tempSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closest;
};

module.exports = threeSumClosest;
