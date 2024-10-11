import twoSum from "./twoSum/twoSum";
import addTwoNumbers, {
  ListNode,
  arrayToLinkedList,
} from "./addTwoNumbers/addTwoNumbers";
import lengthOfLongestSubstring from "./longestSubstringWithoutRepeatingCharacters/longestSubstringWithoutRepeatingCharacters";
console.log(twoSum([3, 3], 6)); // [0, 1]

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

console.log(addTwoNumbers(l1, l2)); // ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }

lengthOfLongestSubstring("anviaj"); // 3
