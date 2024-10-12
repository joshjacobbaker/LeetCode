// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

export default function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;

  // Helper function to find the longest odd-length palindrome
  // Helper function to expand around the center and find the longest palindrome
  function expandAroundCenter(
    left: number,
    right: number,
    oddOrEventlabel: string
  ): void {
    console.log({ oddOrEventlabel });
    // Expand as long as the characters on both sides are equal
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      console.log("inside while", {
        left,
        right,
        sleft: s[left],
        rleft: s[right],
      });
    }

    // Move back to the last valid palindrome indices
    left++;
    right--;
    console.log("outside while", {
      left,
      right,
      sleft: s[left],
      rleft: s[right],
    });

    // Update the start and end indices if a longer palindrome is found
    if (right - left > end - start) {
      console.log("Left Right Update -- longer palindrome found -- before", {
        left,
        right,
        sleft: s[left],
        rleft: s[right],
        start,
        end,
      });
      start = left;
      end = right;
      console.log("Left Right Update -- longer palindrome found -- after", {
        left,
        right,
        sleft: s[left],
        rleft: s[right],
        start,
        end,
      });
    }
  }

  for (let i = 0; i < s.length; i++) {
    console.log({ i, s, letter: s[i] });
    // Expand around the center assuming the current character is the center of an odd-length palindrome
    expandAroundCenter(i, i, "odd");

    // Expand around the center assuming the current character and the next character are the center of an even-length palindrome
    expandAroundCenter(i, i + 1, "even");
  }

  return s.slice(start, end + 1);
}
