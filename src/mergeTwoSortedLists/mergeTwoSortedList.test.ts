import mergeTwoLists from "./mergeTwoSortedList";
import { ListNode } from "./mergeTwoSortedList";

function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(list: ListNode | null): number[] {
  let arr: number[] = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

describe("mergeTwoLists", () => {
  it("should merge two non-empty lists", () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(listToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("should merge with one empty list", () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([0]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(listToArray(mergedList)).toEqual([0]);
  });

  it("should merge with both empty lists", () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(listToArray(mergedList)).toEqual([]);
  });

  it("should merge with one list being null", () => {
    const list1 = null;
    const list2 = arrayToList([1, 2, 3]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(listToArray(mergedList)).toEqual([1, 2, 3]);
  });

  it("should merge with both lists being null", () => {
    const list1 = null;
    const list2 = null;
    const mergedList = mergeTwoLists(list1, list2);
    expect(listToArray(mergedList)).toEqual([]);
  });
});
