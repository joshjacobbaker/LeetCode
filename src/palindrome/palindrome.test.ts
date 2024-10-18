import palindrome from "./palindrome";

describe("palindrome", () => {
  it("should return true for 'racecar'", () => {
    expect(palindrome(101)).toBe(true);
  });

  it("should return false for '-123'", () => {
    expect(palindrome(-123)).toBe(false);
  });
});
