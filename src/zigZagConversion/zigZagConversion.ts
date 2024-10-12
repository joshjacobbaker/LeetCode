// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output:    "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output:    "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

export default function convert(s: string, numRows: number): string {
  // If there's only one row, the zigzag pattern is the same as the original string
  if (numRows === 1) {
    return s;
  }

  // Initialize an array of empty strings for each row
  const rows: string[] = Array(numRows).fill("");
  // Variable to track the direction of traversal (true for up, false for down)
  let ascending = true;
  // Variable to track the current row, initialized to -1 to start at 0
  let currentRow = -1;

  // Iterate over each character in the string
  for (let i = 0; i < s.length; i++) {
    // Move to the next row based on the current direction
    currentRow += ascending ? 1 : -1;
    // Append the current character to the current row
    rows[currentRow] += s[i];

    console.log({ i, numRows, currentRow, rows });

    // Change direction if we reach the top or bottom row
    if (currentRow === numRows - 1) {
      ascending = false;
    } else if (currentRow === 0) {
      ascending = true;
    }
  }

  // Join all rows to get the final zigzag converted string
  return rows.join("");
}
