import myAtoi from "./stringToInteger";

describe("myAtoi", () => {
  it("should convert a simple positive number", () => {
    let argument = "42";
    let expected = 42;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
  });

  it("should convert a simple negative number", () => {
    let argument = "-42";
    let expected = -42;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
  });

  it("should ignore leading whitespace", () => {
    let argument = "   42";
    let expected = 42;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
  });

  it("should handle positive sign", () => {
    let argument = "+42";
    let expected = 42;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
  });

  it("should return 0 for non-numeric input", () => {
    let argument = "abc";
    let expected = 0;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
  });

  it("should handle mixed input with leading numbers", () => {
    let argument = "4193 with words";
    let expected = 4193;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
  });

  it("should handle mixed input with leading words", () => {
    let argument = "words and 987";
    let expected = 0;
    let result = myAtoi(argument);
    console.log({ argument, result, expected });
    expect(result).toBe(expected);
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

  it("should handle input with sign in the middle", () => {
    expect(myAtoi("0-1")).toBe(0);
  });
  it("should handle input with sign in the middle", () => {
    expect(myAtoi("+-12")).toBe(0);
  });
});
