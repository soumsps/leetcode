const findMedianSortedArrays = require("./index");

test("findMedianSortedArray([1,3],[2]) returns 2.0", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
});

test("input ([1,2], [3,4]) returns 2.5", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
});

test("input ([3], [-1,-2]) returns -1", () => {
  expect(findMedianSortedArrays([3], [-1, -2])).toEqual(-1);
});
