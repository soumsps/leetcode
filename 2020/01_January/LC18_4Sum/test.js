const fourSum = require("./index");

test("should return 4sum array", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).not.toEqual([
    [-1, 0, 0, 1],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2]
  ]);
});
