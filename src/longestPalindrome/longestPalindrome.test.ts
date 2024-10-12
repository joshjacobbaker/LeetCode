import longestPalindrome from "./longestPalindrome";

describe("longestPalindrome", () => {
  it('should return the longest palindromic substring for "babad"', () => {
    const result = longestPalindrome("babad");
    expect(result).toBe("bab"); // "aba" is also a valid answer
  });

  it('should return the longest palindromic substring for "cbbd"', () => {
    const result = longestPalindrome("cbbd");
    expect(result).toBe("bb");
  });

  it("should return the entire string if it is a palindrome", () => {
    const result = longestPalindrome("racecar");
    expect(result).toBe("racecar");
  });

  it("should return the first character if no palindrome longer than 1 character exists", () => {
    const result = longestPalindrome("abc");
    expect(result).toBe("a"); // "b" or "c" are also valid answers
  });

  it("should handle a string with all identical characters", () => {
    const result = longestPalindrome("aaaa");
    expect(result).toBe("aaaa");
  });

  it("should handle an empty string", () => {
    const result = longestPalindrome("");
    expect(result).toBe("");
  });

  it("should handle a single character string", () => {
    const result = longestPalindrome("a");
    expect(result).toBe("a");
  });
});
