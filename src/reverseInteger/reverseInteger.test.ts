import reverseInteger from "./reverseInteger";

describe("reverseInteger", () => {
  it("should reverseInteger positive integers correctly", () => {
    expect(reverseInteger(123)).toBe(321);
    expect(reverseInteger(120)).toBe(21);
    expect(reverseInteger(1)).toBe(1);
  });

  it("should reverseInteger negative integers correctly", () => {
    expect(reverseInteger(-123)).toBe(-321);
    expect(reverseInteger(-120)).toBe(-21);
    expect(reverseInteger(-1)).toBe(-1);
  });

  it("should return 0 for integers outside the 32-bit signed integer range", () => {
    expect(reverseInteger(Math.pow(2, 31))).toBe(0);
    expect(reverseInteger(Math.pow(-2, 31) - 1)).toBe(0);
  });

  it("should handle edge cases correctly", () => {
    expect(reverseInteger(0)).toBe(0);
    expect(reverseInteger(1000000003)).toBe(0);
  });

  it("should return 0 for x = 1534236469 as it exceeds the 32-bit signed integer range when reversed", () => {
    expect(reverseInteger(1534236469)).toBe(0);
  });
});
