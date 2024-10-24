import romanToInt from "./romanToInt";

describe("romanToInt", () => {
  it("converts single roman numeral correctly", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
    expect(romanToInt("L")).toBe(50);
    expect(romanToInt("C")).toBe(100);
    expect(romanToInt("D")).toBe(500);
    expect(romanToInt("M")).toBe(1000);
  });

  it("converts combined roman numerals correctly", () => {
    expect(romanToInt("II")).toBe(2);
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });

  it("converts complex roman numerals correctly", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
    expect(romanToInt("MMXXIII")).toBe(2023);
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });

  it("handles invalid or empty input gracefully", () => {
    expect(romanToInt("")).toBe(0);
    // expect(romanToInt("IIII")).toBe(NaN); // Invalid input
    // expect(romanToInt("VV")).toBe(NaN); // Invalid input
  });
});
