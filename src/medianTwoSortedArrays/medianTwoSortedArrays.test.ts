import findMedianSortedArrays from "./medianTwoSortedArrays";

describe("findMedianSortedArrays", () => {
  it("should return the median for arrays with odd total length", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it("should return the median for arrays with even total length", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  it("should handle arrays with different lengths", () => {
    expect(findMedianSortedArrays([1, 3, 5], [2, 4])).toBe(3);
  });

  it("should handle arrays with negative numbers", () => {
    expect(findMedianSortedArrays([-1, -3], [-2])).toBe(-2);
  });

  it("should handle arrays with duplicate numbers", () => {
    expect(findMedianSortedArrays([1, 1, 1], [1, 1, 1])).toBe(1);
  });

  it("should handle one empty array", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });

  it("should handle both arrays being empty", () => {
    expect(findMedianSortedArrays([], [])).toBeNaN();
  });
});
