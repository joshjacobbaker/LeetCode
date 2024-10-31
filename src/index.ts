import twoSum from "./twoSum/twoSum";
import addTwoNumbers, {
  ListNode,
  arrayToLinkedList,
} from "./addTwoNumbers/addTwoNumbers";
import lengthOfLongestSubstring from "./longestSubstringWithoutRepeatingCharacters/longestSubstringWithoutRepeatingCharacters";
import findMedianSortedArrays from "./medianTwoSortedArrays/medianTwoSortedArrays";
import longestPalindrome from "./longestPalindrome/longestPalindrome";
import stringToInteger from "./stringToInteger/stringToInteger";
import isMatch from "./isMatch/isMatch";
import intToRoman from "./integerToRoman/integerToRoman";
import romanToInt from "./romanToInt/romanToInt";
import longestCommonPrefix from "./longestCommonPrefix/longestCommonPrefix";
import letterCombinations from "./letterCombination/letterCombinations";
import removeNthFromEnd from "./removeNthNodeFromEndOfList/removeNthNodeFromEndOfList";
twoSum([3, 3], 6); // [0, 1]

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
const nodeA3 = new ListNode(3, null);
const nodeA2 = new ListNode(4, nodeA3);
const nodeA1 = new ListNode(2, nodeA2);

const nodeB3 = new ListNode(4, null);
const nodeB2 = new ListNode(6, nodeB3);
const nodeB1 = new ListNode(5, nodeB2);

let l1 = arrayToLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
let l2 = arrayToLinkedList([5, 6, 4]);

addTwoNumbers(l1, l2); // ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }

lengthOfLongestSubstring("anviaj"); // 3

findMedianSortedArrays([1, 3], [2]); // 2

longestPalindrome("babad"); // "bab" or "aba"

stringToInteger("0-1");
isMatch("aab", "c*a*b");
intToRoman(58);
romanToInt("MCMXCIV");
// longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
longestCommonPrefix(["ab", "a"]); // a

letterCombinations("23");
removeNthFromEnd(nodeA1, 2);
