/**
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.

Examples

Input: [1,2,3,1]
Output: true

Input: [1,2,3,4]
Output: false

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let duplicatePresent = false;
  let elementSet = new Set();

  nums.map(item =>
    elementSet.has(item) ? (duplicatePresent = true) : elementSet.add(item)
  );

  return duplicatePresent;
};

module.exports = containsDuplicate;
