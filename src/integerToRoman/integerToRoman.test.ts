import intToRoman from "./integerToRoman";

describe("intToRoman", () => {
  it("should convert 1 to I", () => {
    expect(intToRoman(1)).toBe("I");
  });

  it("should convert 4 to IV", () => {
    expect(intToRoman(4)).toBe("IV");
  });

  it("should convert 9 to IX", () => {
    expect(intToRoman(9)).toBe("IX");
  });

  it("should convert 58 to LVIII", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });

  it("should convert 1994 to MCMXCIV", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });

  it("should convert 3999 to MMMCMXCIX", () => {
    expect(intToRoman(3999)).toBe("MMMCMXCIX");
  });

  it("should convert 0 to an empty string", () => {
    expect(intToRoman(0)).toBe("");
  });

  it("should convert 1000 to M", () => {
    expect(intToRoman(1000)).toBe("M");
  });

  it("should convert 500 to D", () => {
    expect(intToRoman(500)).toBe("D");
  });

  it("should convert 100 to C", () => {
    expect(intToRoman(100)).toBe("C");
  });

  it("should convert 50 to L", () => {
    expect(intToRoman(50)).toBe("L");
  });

  it("should convert 10 to X", () => {
    expect(intToRoman(10)).toBe("X");
  });

  it("should convert 5 to V", () => {
    expect(intToRoman(5)).toBe("V");
  });
});
