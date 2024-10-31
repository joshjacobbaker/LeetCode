//   Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null) return null;
˝
  // Get the length of the linked list
  let length = 0;
  let current: ListNode | null = head;
  while (current !== null) {
    length++;
    current = current.next;
  }

  // If n is equal to the length, remove the head
  if (n === length) {
    return head.next;
  }

  // Find the node before the nth node from the end
  current = head;
  for (let i = 1; i < length - n; i++) {
    current = current.next!;
  }

  // Remove the nth node from the end
  current.next = current.next!.next;
  return head;
}

function removeNthFromEndLeetCode(head: ListNode | null, n: number): ListNode | null {
    let fastP: ListNode | null = head
    let slowP: ListNode | null = head
    for (let i = 0; i < n; i++) {
        fastP = fastP!.next;
    }
    if (!fastP) return head!.next;

    while (fastP.next) {
        fastP = fastP.next
        slowP = slowP!.next;
    }
    slowP!.next = slowP!.next!.next;

    return head
};