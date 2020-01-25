/**
 Given an array nums of n integers and an integer target, are there elements a, b, c, and d
in nums such that a + b + c + d = target? 
Find all unique quadruplets in the array which gives the sum of target.

Note:
The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let tempSum = nums[i] + nums[j] + nums[left] + nums[right];

        if (tempSum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (tempSum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return result;
};

module.exports = fourSum;
