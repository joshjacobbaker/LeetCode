import threeSumClosest from "./threeSumClosest";

describe("threeSumClosest", () => {
  it("returns the closest sum to the target", () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
    expect(threeSumClosest([1, 1, 1, 1], 3)).toBe(3);
    expect(threeSumClosest([1, 2, 3, 4], 6)).toBe(6);
  });

  it("handles negative numbers correctly", () => {
    expect(threeSumClosest([-1, -2, -3, -4], -6)).toBe(-6);
    expect(threeSumClosest([-1, 2, 1, -4], -1)).toBe(-1);
  });

  it("handles large arrays", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i - 500);
    expect(threeSumClosest(largeArray, 50)).toBe(50);
  });

  it("handles edge cases", () => {
    expect(threeSumClosest([1, 1, 1], 2)).toBe(3);
    expect(threeSumClosest([1, 1, 1, 0], 2)).toBe(2);
  });
});
