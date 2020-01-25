const threeSumClosest = require("./index");

test("input([-1,2,1,-4], 1)  should return 2", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
});
