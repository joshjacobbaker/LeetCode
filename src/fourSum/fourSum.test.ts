import fourSum from "./fourSum";
test("fourSum finds all unique quadruplets that sum up to the target", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);

  expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);

  expect(fourSum([-3, -1, 0, 2, 4, 5], 2)).toEqual([[-3, -1, 2, 4]]);

  expect(fourSum([0, 0, 0, 0], 0)).toEqual([[0, 0, 0, 0]]);

  expect(fourSum([1, 2, 3, 4, 5], 50)).toEqual([]);
});
