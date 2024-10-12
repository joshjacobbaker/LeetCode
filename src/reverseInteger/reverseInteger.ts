// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

// export default function reverse(x: number): number {
//   let negativeValue = false;
//   // Split the string and check for negative sign
//   let arr = x.toString().split("");
//   if (arr[0] === "-") {
//     arr.shift();
//     negativeValue = true;
//   }
//   // Reverse the string
//   let reversed = arr.reverse().join("");
//   // Check if the number is negative
//   if (negativeValue) {
//     reversed = "-" + reversed;
//   }
//   // Convert the string back to number
//   let result = parseInt(reversed);
//   // Check if the number is within the range
//   if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
//     return 0;
//   }
//   console.log({ x, result });
//   return result;
// }

export default function reverse(x: number): number {
  let num: number = x;
  if (x < 0) {
    num = -1 * Number(x.toString().split("").slice(1).reverse().join(""));
  } else if (x > 0) {
    num = Number(x.toString().split("").reverse().join(""));
  }
  if (num > 2 ** 31 - 1 || num < -(2 ** 31)) {
    return 0;
  }
  return num;
}

const minInt = -Math.pow(2, 31);
const maxInt = -minInt - 1;

function reverse2(x: number): number {
  // Check if the number is negative
  const isNegative = x < 0;
  let reversed = 0;

  // If the number is negative, make it positive for reversal
  if (isNegative) {
    x = -x;
  }

  // Reverse the digits of the number
  while (x > 0) {
    const remainder = x % 10; // Get the last digit
    reversed = reversed * 10 + remainder; // Append the last digit to the reversed number
    x = Math.floor(x / 10); // Remove the last digit from the original number
  }

  // Check if the reversed number is within the 32-bit signed integer range
  if (reversed > maxInt) {
    return 0;
  }

  // Return the reversed number, making it negative if the original number was negative
  return isNegative ? -reversed : reversed;
}
