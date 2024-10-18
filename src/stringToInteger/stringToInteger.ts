// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// export default function myAtoi(s: string): number {
//   // Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
//   let signPositive = true;
//   let result = "";
//   let ignoreZero = true;
//   let char = "";

//   for (let i = 0; i < s.length; i++) {
//     // skip over spaces
//     if (s[i] === " ") {
//       continue;
//     }
//     // check for sign and set signPositive
//     if ((s[i] === "-" || s[i] === "+") && result === "" && char === "") {
//       char += s[i];
//       if (s[i] === "-") {
//         signPositive = false;
//         continue;
//       }
//       if (s[i] === "+") {
//         signPositive = true;
//         continue;
//       }
//     } else {
//       // if we have a sign and a number, break the loop
//       if (s[i] === "-" || s[i] === "+") {
//         break;
//       }
//     }
//     // check for non-numeric characters and end loop if found
//     if (isNaN(parseInt(s[i]))) {
//       break;
//     }
//     // check for leading zeros and ignore them until a non-zero number is found
//     if (s[i] === "0" && ignoreZero) {
//       result += s[i];
//       continue;
//     } else if (result === "") {
//       ignoreZero = false;
//       result += s[i];
//       continue;
//     }

//     result += s[i];
//   }

//   return result === "" || result === "-" || result === "+"
//     ? 0
//     : signPositive
//       ? Math.min(Number(result), 2 ** 31 - 1)
//       : Math.max(Number(result) * -1, -(2 ** 31));
// }

export default function myAtoi(s: string): number {
  let result = 0;
  let sign = 1;
  let i = 0;
  const n = s.length;

  // Ignore leading whitespace

  while (i < n && s[i] === " ") {
    i++;
  }

  // Check for sign

  if (i < n && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;

    i++;
  }

  // Convert digits to number

  while (i < n && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s.charCodeAt(i) - "0".charCodeAt(0));

    i++;
  }

  result *= sign;

  // Clamp result to 32-bit signed integer range

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  if (result > INT_MAX) return INT_MAX;

  if (result < INT_MIN) return INT_MIN;

  return result;
}
