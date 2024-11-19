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
import isValid from "./isValidParentheses/isValidParentheses";
import mergeTwoLists from "./mergeTwoSortedLists/mergeTwoSortedList";
import generateParenthesis from "./generateParenthesis/generateParenthesis";
import { mergeKLists } from "./mergeKLists/mergeKLists";
twoSum([3, 3], 6);

const nodeA3 = new ListNode(5, null);
const nodeA2 = new ListNode(4, nodeA3);
const nodeA1 = new ListNode(2, nodeA2);

const nodeB3 = new ListNode(4, null);
const nodeB2 = new ListNode(3, nodeB3);
const nodeB1 = new ListNode(1, nodeB2);

const nodeC3 = new ListNode(6, null);
const nodeC2 = new ListNode(3, nodeC3);
const nodeC1 = new ListNode(2, nodeC2);

let l1 = arrayToLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
let l2 = arrayToLinkedList([5, 6, 4]);

addTwoNumbers(l1, l2);
lengthOfLongestSubstring("anviaj");
findMedianSortedArrays([1, 3], [2]);
longestPalindrome("babad");
stringToInteger("0-1");
isMatch("aab", "c*a*b");
intToRoman(58);
romanToInt("MCMXCIV");
longestCommonPrefix(["ab", "a"]);
letterCombinations("23");
removeNthFromEnd(nodeA1, 2);
isValid("()[]{}");
generateParenthesis(3);
mergeKLists([nodeA1, nodeB1, nodeC1]);
// TODO: Implement mergeTwoLists
// TODO MONDAY: Implement mergeKLists
// TODO TUESDAY: Implement generateParenthesis
