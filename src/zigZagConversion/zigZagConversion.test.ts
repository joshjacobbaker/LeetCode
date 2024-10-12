import convert from "./zigZagConversion";

describe("convert", () => {
  it('should convert "PAYPALISHIRING" with 3 rows to "PAHNAPLSIIGYIR"', () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  it('should convert "PAYPALISHIRING" with 4 rows to "PINALSIGYAHRPI"', () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  it('should convert "A" with 1 row to "A"', () => {
    expect(convert("A", 1)).toBe("A");
  });

  it('should convert "AB" with 1 row to "AB"', () => {
    expect(convert("AB", 1)).toBe("AB");
  });

  it('should convert "ABCD" with 2 rows to "ACBD"', () => {
    expect(convert("ABCD", 2)).toBe("ACBD");
  });

  it('should convert "ABCDE" with 4 rows to "ABCED"', () => {
    expect(convert("ABCDE", 4)).toBe("ABCED");
  });

  it("should handle empty string", () => {
    expect(convert("", 3)).toBe("");
  });

  it("should handle numRows greater than string length", () => {
    expect(convert("ABC", 5)).toBe("ABC");
  });
});
