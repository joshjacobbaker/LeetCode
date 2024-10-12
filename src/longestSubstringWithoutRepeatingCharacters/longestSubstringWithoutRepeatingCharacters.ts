// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

export default function lengthOfLongestSubstring(s: string): number {
  // Initialize the variable to store the length of the longest substring found
  let longest = 0;
  // Initialize the variable to store the current substring without repeating characters
  let current = "";

  // Iterate over each character in the input string
  for (let i = 0; i < s.length; i++) {
    const char = s[i]; // Get the current character
    const index = current.indexOf(char); // Check if the character is already in the current substring

    // If the character is found in the current substring
    if (index !== -1) {
      // Remove the part of the substring up to and including the repeated character
      current = current.slice(index + 1);
    }

    // Add the current character to the substring
    current += char;
    // Update the longest substring length if the current substring is longer
    longest = Math.max(longest, current.length);
  }

  // Return the length of the longest substring without repeating characters
  return longest;
}
