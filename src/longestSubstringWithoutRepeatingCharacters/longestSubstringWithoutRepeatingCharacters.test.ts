import lengthOfLongestSubstring from "./longestSubstringWithoutRepeatingCharacters";

describe("lengthOfLongestSubstring", () => {
  it('should return 3 for input "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it('should return 1 for input "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it('should return 3 for input "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("should return 0 for an empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it('should return 5 for input "abcde"', () => {
    expect(lengthOfLongestSubstring("abcde")).toBe(5);
  });

  it('should return 3 for input "dvdf"', () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });

  it('should return 7 for input "abcdefg"', () => {
    expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
  });

  it('should return 2 for input "aab"', () => {
    expect(lengthOfLongestSubstring("aab")).toBe(2);
  });

  it('should return 3 for input "aabaab!bb"', () => {
    expect(lengthOfLongestSubstring("aabaab!bb")).toBe(3);
  });

  it('should return 5 for input "anviaj"', () => {
    expect(lengthOfLongestSubstring("anviaj")).toBe(5);
  });
});
