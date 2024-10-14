import myAtoi from "./stringToInteger";

describe("myAtoi", () => {
  it("should convert a simple positive number", () => {
    expect(myAtoi("42")).toBe(42);
  });

  it("should convert a simple negative number", () => {
    expect(myAtoi("-42")).toBe(-42);
  });

  it("should ignore leading whitespace", () => {
    expect(myAtoi("   42")).toBe(42);
  });

  it("should handle positive sign", () => {
    expect(myAtoi("+42")).toBe(42);
  });

  it("should return 0 for non-numeric input", () => {
    expect(myAtoi("abc")).toBe(0);
  });

  it("should handle mixed input with leading numbers", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
  });

  it("should handle mixed input with leading words", () => {
    expect(myAtoi("words and 987")).toBe(0);
  });

  it("should handle input with only sign", () => {
    expect(myAtoi("-")).toBe(0);
    expect(myAtoi("+")).toBe(0);
  });

  it("should handle input with sign and non-numeric characters", () => {
    expect(myAtoi("-abc")).toBe(0);
    expect(myAtoi("+abc")).toBe(0);
  });

  it("should handle input with leading zeros", () => {
    expect(myAtoi("0000123")).toBe(123);
  });

  it("should handle input out of 32-bit signed integer range", () => {
    expect(myAtoi("2147483648")).toBe(2147483647);
    expect(myAtoi("-2147483649")).toBe(-2147483648);
  });

  it("should return 0 for empty string", () => {
    expect(myAtoi("")).toBe(0);
  });

  it("should handle input with only whitespace", () => {
    expect(myAtoi("   ")).toBe(0);
  });
});
