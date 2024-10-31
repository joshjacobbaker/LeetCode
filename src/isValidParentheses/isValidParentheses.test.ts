import isValid from "./isValidParentheses";

describe("isValid", () => {
  it("returns true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
  });

  it("returns false for invalid parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}")).toBe(false);
  });

  it("returns true for empty string", () => {
    expect(isValid("")).toBe(true);
  });

  it("returns false for single unpaired parentheses", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("]")).toBe(false);
  });

  it("returns false for string with only opening parentheses", () => {
    expect(isValid("(((")).toBe(false);
    expect(isValid("[[[")).toBe(false);
    expect(isValid("{{{")).toBe(false);
  });

  it("returns false for string with only closing parentheses", () => {
    expect(isValid(")))")).toBe(false);
    expect(isValid("]]]")).toBe(false);
    expect(isValid("}}}")).toBe(false);
  });
});
