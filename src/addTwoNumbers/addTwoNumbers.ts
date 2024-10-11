// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Are there early return edge cases?

  if (!l1 && !l2) {
    return null;
  }

  // reverse linked lists l1 and l2
  l1 = reverseLinkedList(l1);
  l2 = reverseLinkedList(l2);
  // create array of linked list node values for l1 and l2
  const l1Arr = linkedListToArray(l1);
  const l2Arr = linkedListToArray(l2);
  // merge the elements in the array together and return a single number
  const l1Num = arrayToBigInt(l1Arr);
  const l2Num = arrayToBigInt(l2Arr);
  // add the two numbers together
  const sum = (l1Num as bigint) + (l2Num as bigint);
  // seperate the number into an array of digits and reverse the numbers
  const sumReversed = bigIntToArray(sum).reverse();

  // create a linked list from the array of digits
  const sumLinkedList = arrayToLinkedList(sumReversed);
  // return the linked list
  return sumLinkedList;
}

function reverseLinkedList(l: ListNode | null): ListNode | null {
  let prev = null;
  let current = l;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function linkedListToArray(l: ListNode | null): number[] {
  const arr = [];

  while (l) {
    arr.push(l.val);
    l = l.next;
  }

  return arr;
}

export function arrayToLinkedList(arr: number[]): ListNode | null {
  let l: ListNode | null = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    l = new ListNode(arr[i], l);
  }

  return l;
}

function arrayToBigInt(arr: number[]): BigInt {
  return BigInt(arr.join(""));
}

function bigIntToArray(num: BigInt): number[] {
  return num.toString().split("").map(Number);
}

function linkedListToBigInt(l: ListNode | null): BigInt {
  return arrayToBigInt(linkedListToArray(l));
}

function bigIntToLinkedList(num: BigInt): ListNode | null {
  return arrayToLinkedList(bigIntToArray(num));
}
