const containsDuplicate = require("./index");

test("input([1,2,3,1]) output(true)", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
});

test("input([1,2,3,4]) output(false)", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
});

test("input([1,1,1,3,3,4,3,2,4,2]) output(false)", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});
