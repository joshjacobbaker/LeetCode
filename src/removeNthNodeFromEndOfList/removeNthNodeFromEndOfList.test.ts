import removeNthFromEnd from "./removeNthNodeFromEndOfList";
import { ListNode } from "./removeNthNodeFromEndOfList";

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe("removeNthFromEnd", () => {
  it("removes the nth node from the end of the list", () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 2);
    expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
  });

  it("removes the head when n is equal to the length of the list", () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 5);
    expect(linkedListToArray(result)).toEqual([2, 3, 4, 5]);
  });

  it("returns null when the list is empty", () => {
    const result = removeNthFromEnd(null, 1);
    expect(result).toBeNull();
  });

  it("removes the only node in a single-node list", () => {
    const head = createLinkedList([1]);
    const result = removeNthFromEnd(head, 1);
    expect(result).toBeNull();
  });

  it("removes the last node when n is 1", () => {
    const head = createLinkedList([1, 2, 3]);
    const result = removeNthFromEnd(head, 1);
    expect(linkedListToArray(result)).toEqual([1, 2]);
  });
});
