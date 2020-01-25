const productExceptSelf = require("./index");

test("input([1,2,3,4]) output([24,12,8,6])", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});
