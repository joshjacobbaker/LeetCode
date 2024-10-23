export default function intToRoman(num: number): string {
  // Convert number to string
  const numStr = num.toString();
  // Length of number
  const m = numStr.length;
  // Number of zeros in the digit
  let numberOfZeros = 0;
  // Initialize digit, place value of digit, digit value, and roman numeral
  let digit: number = 0;
  let placeValueOfDigit = 0;
  let digitValue = digit * placeValueOfDigit;
  let romanNumeral = "";
  // Map of numbers to roman numerals
  const symbol: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  // Iterate over digits in number to have them mapped to a roman numeral
  for (let i = 0; i < m; i++) {
    digit = parseInt(numStr[i]);
    numberOfZeros = m - i - 1;
    placeValueOfDigit = Math.pow(10, numberOfZeros);
    digitValue = digit * placeValueOfDigit;
    // Check if the current digit is a special case
    if (symbol[digitValue]) {
      romanNumeral = romanNumeral + symbol[digitValue];
    } else {
      // Check if the current digit is less than 5
      if (digit < 5) {
        // Check if the current digit is 4
        if (digit === 4) {
          romanNumeral = romanNumeral + symbol[digitValue];
        } else {
          // Add the current digit to the roman numeral
          for (let j = 0; j < digit; j++) {
            romanNumeral = romanNumeral + symbol[placeValueOfDigit];
          }
        }
        // Check if the current digit is 5
      } else if (digit === 5) {
        romanNumeral = romanNumeral + symbol[5 * placeValueOfDigit];
      } else {
        // Check if the current digit is 9
        if (digit === 9) {
          romanNumeral = romanNumeral + symbol[digitValue];
        } else {
          romanNumeral = romanNumeral + symbol[5 * placeValueOfDigit];
          digit = digit - 5;
          for (let j = 0; j < digit; j++) {
            romanNumeral = romanNumeral + symbol[placeValueOfDigit];
          }
        }
      }
    }
  }
  return romanNumeral;
}
