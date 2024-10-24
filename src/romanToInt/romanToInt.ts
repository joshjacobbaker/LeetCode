export default function romanToInt(s: string): number {
  let stringLength = s.length;
  let numberFromRomanNumerals = "";
  let currentRomanNumeral = "";
  let nextRomanNumeral = "";
  let symbolToNumberMap: { [key: string]: string } = {
    I: "1",
    IV: "4",
    V: "5",
    IX: "9",
    X: "10",
    XL: "40",
    L: "50",
    XC: "90",
    C: "100",
    CD: "400",
    D: "500",
    CM: "900",
    M: "1000",
  };

  for (let i = 0; i < stringLength; i++) {
    currentRomanNumeral = s[i];
    nextRomanNumeral = s[i + 1];

    switch (currentRomanNumeral) {
      case "I":
        switch (nextRomanNumeral) {
          case "V":
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral + nextRomanNumeral];
            i++;
            continue;
          case "X":
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral + nextRomanNumeral];
            i++;
            continue;
          default:
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral];
            continue;
        }
      case "V":
        numberFromRomanNumerals =
          numberFromRomanNumerals +
          "+" +
          symbolToNumberMap[currentRomanNumeral];
        continue;
      case "X":
        switch (nextRomanNumeral) {
          case "L":
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral + nextRomanNumeral];
            i++;
            continue;
          case "C":
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral + nextRomanNumeral];
            i++;
            continue;
          default:
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral];
            continue;
        }
      case "L":
        numberFromRomanNumerals =
          numberFromRomanNumerals +
          "+" +
          symbolToNumberMap[currentRomanNumeral];
        continue;
      case "C":
        switch (nextRomanNumeral) {
          case "D":
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral + nextRomanNumeral];
            i++;
            continue;
          case "M":
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral + nextRomanNumeral];
            i++;
            continue;
          default:
            numberFromRomanNumerals =
              numberFromRomanNumerals +
              "+" +
              symbolToNumberMap[currentRomanNumeral];
            continue;
        }
      case "D":
        numberFromRomanNumerals =
          numberFromRomanNumerals +
          "+" +
          symbolToNumberMap[currentRomanNumeral];
        continue;
      case "M":
        numberFromRomanNumerals =
          numberFromRomanNumerals +
          "+" +
          symbolToNumberMap[currentRomanNumeral];
        continue;
    }
  }
  // SUM all numbers and return integer
  // Step 1: Split the string by the '+' character
  const parts = numberFromRomanNumerals.split("+");

  // Step 2: Convert each substring to a number and filter out empty strings
  const numbers = parts.filter((part) => part !== "").map(Number);

  // Step 3: Sum the numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return parseInt(sum.toString());
}
