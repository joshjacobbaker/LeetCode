import longestCommonPrefix from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
  it("should return the longest common prefix for a list of strings", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(
      longestCommonPrefix(["interspecies", "interstellar", "interstate"])
    ).toBe("inters");
    expect(longestCommonPrefix(["throne", "throne"])).toBe("throne");
    expect(longestCommonPrefix(["throne", "dungeon"])).toBe("");
    expect(longestCommonPrefix(["throne", "throne", "throne"])).toBe("throne");
  });

  it("should return an empty string for an empty input array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("should return the string itself if the input array contains only one string", () => {
    expect(longestCommonPrefix(["single"])).toBe("single");
  });

  it("should handle cases with no common prefix", () => {
    expect(longestCommonPrefix(["apple", "banana", "cherry"])).toBe("");
  });

  it("should handle cases with all strings being the same", () => {
    expect(longestCommonPrefix(["same", "same", "same"])).toBe("same");
  });
});
