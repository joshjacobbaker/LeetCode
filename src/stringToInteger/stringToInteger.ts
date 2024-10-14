// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

export default function myAtoi(s: string): number {
  // Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
  let signPositive = true;
  let result = "";
  let ignoreZero = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      continue;
    }
    if (s[i] === "-" || s[i] === "+") {
      if (s[i] === "-") {
        signPositive = false;
      }
      if (s[i] === "+") {
        signPositive = true;
      }
    }
    if (s[i] === "0" && ignoreZero) {
      continue;
    } else if (s[i] === "0" && !ignoreZero) {
      result += s[i];
    }

    if (s[i] !== "0" && result === "") {
      ignoreZero = false;
    }

    if (isNaN(parseInt(s[i]))) {
      break;
    }
    result += s[i];
  }
  return result === ""
    ? 0
    : signPositive
      ? Math.min(Number(result), 2 ** 31 - 1)
      : Math.max(Number(result) * -1, -(2 ** 31));
}
