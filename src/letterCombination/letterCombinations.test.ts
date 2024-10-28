import letterCombinations from "./letterCombinations";
describe("letterCombinations", () => {
  it("should return an empty array for an empty input", () => {
    expect(letterCombinations("")).toEqual([]);
  });

  it("should return the correct combinations for a single digit", () => {
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
    expect(letterCombinations("3")).toEqual(["d", "e", "f"]);
  });

  it("should return the correct combinations for two digits", () => {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });

  it("should return the correct combinations for three digits", () => {
    expect(letterCombinations("234")).toEqual([
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ]);
  });

  it("should handle digits that map to an empty string", () => {
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  });
});
