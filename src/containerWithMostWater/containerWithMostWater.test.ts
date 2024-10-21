import containerWithMostWater from "./containerWithMostWater";

describe("containerWithMostWater", () => {
  test("should return the maximum area for given heights", () => {
    expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(containerWithMostWater([1, 1])).toBe(1);
    expect(containerWithMostWater([4, 3, 2, 1, 4])).toBe(16);
    expect(containerWithMostWater([1, 2, 1])).toBe(2);
  });

  test("should return 0 for empty or single element array", () => {
    expect(containerWithMostWater([])).toBe(0);
    expect(containerWithMostWater([1])).toBe(0);
  });

  test("should handle cases with large numbers", () => {
    expect(containerWithMostWater([10000, 1, 10000])).toBe(20000);
  });
});
