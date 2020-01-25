/**
 Given an array nums of n integers where n > 1,  
 return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? 
(The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // initializing result array to all 1
  let array = nums.map(n => 1);

  let product = 1;
  //left processing
  for (let i = 0; i < nums.length; i++) {
    array[i] = array[i] * product;
    product = product * nums[i];
  }

  product = 1;
  //right processing
  for (let i = nums.length - 1; i >= 0; i--) {
    array[i] = array[i] * product;
    product = product * nums[i];
  }
  return array;
};

module.exports = productExceptSelf;
