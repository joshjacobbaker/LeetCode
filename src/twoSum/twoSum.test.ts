import twoSum from "./twoSum";

describe("twoSum", () => {
  it("should return indices of the two numbers such that they add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should return indices of the two numbers such that they add up to the target", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should return indices of the two numbers such that they add up to the target", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("should return an empty array if no two numbers add up to the target", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });

  it("should handle negative numbers correctly", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});