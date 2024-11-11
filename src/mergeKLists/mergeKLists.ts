//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const data = lists.map((l) => getListAsArray(l));
  const mergedData = data
    .reduce((acc, val) => acc.concat(val), [])
    .sort((a, b) => (a < b ? -1 : 1));
  return getArrayAsListArray(mergedData);
}

function getListAsArray(list: ListNode | null): number[] {
  const array: number[] = [];
  while (list) {
    array.push(list.val);
    list = list.next;
  }
  return array;
}

function append(list: ListNode | null, value: number): ListNode | null {
  if (!list) {
    return { val: value, next: null };
  }
  let current = list;
  while (current.next) {
    current = current.next;
  }
  current.next = { val: value, next: null };
  return list;
}

function getArrayAsListArray(numbers: number[]): ListNode | null {
  let list: ListNode | null = null;
  for (const value of numbers) {
    list = append(list, value);
  }
  return list;
}
