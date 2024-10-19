import isMatch from "./isMatch";

describe("isMatch", () => {
  it("should return true for exact match", () => {
    expect(isMatch("abc", "abc")).toBe(true);
  });

  it("should return false for non-matching strings", () => {
    expect(isMatch("abc", "def")).toBe(false);
  });

  it("should return true for pattern with dot", () => {
    expect(isMatch("abc", "a.c")).toBe(true);
  });

  it("should return true for pattern with star", () => {
    expect(isMatch("aab", "c*a*b")).toBe(true);
  });

  it("should return false for pattern with star not matching", () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
  });

  it("should return true for empty string and empty pattern", () => {
    expect(isMatch("", "")).toBe(true);
  });

  it("should return true for empty string and pattern with star", () => {
    expect(isMatch("", "a*")).toBe(true);
  });

  it("should return false for non-empty string and empty pattern", () => {
    expect(isMatch("a", "")).toBe(false);
  });

  it("should return true for complex pattern", () => {
    expect(isMatch("ab", ".*")).toBe(true);
  });

  it("should return true for multiple stars in pattern", () => {
    expect(isMatch("aaa", "a*a")).toBe(true);
  });

  it("should return false for pattern longer than string", () => {
    expect(isMatch("a", "aa")).toBe(false);
  });

  it("should return true for pattern with multiple dots and stars", () => {
    expect(isMatch("ab", ".*c*")).toBe(true);
  });

  it("should return false for pattern with unmatched characters", () => {
    expect(isMatch("abcd", "d*")).toBe(false);
  });

  it("should return true for pattern with leading star", () => {
    expect(isMatch("abc", ".*abc")).toBe(true);
  });

  it("should return true for pattern with trailing star", () => {
    expect(isMatch("abc", "abc.*")).toBe(true);
  });

  it("should return true for pattern with multiple stars and dots", () => {
    expect(isMatch("abcd", "a.*d")).toBe(true);
  });

  it("should return false for pattern with unmatched star", () => {
    expect(isMatch("abcd", "a*d")).toBe(false);
  });
});
