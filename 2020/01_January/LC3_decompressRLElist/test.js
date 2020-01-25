const decompressRLElist = require("./index");

test("should input[1,2,3,4] returns [2,4,4,4]", () => {
  expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
});
