import mergeTwoSortedList from "../mergeTwoSortedLists/mergeTwoSortedList";

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function mergeKLists(
  lists: Array<ListNode | null>
): ListNode | null {
  const pairwiseMergedLists: Array<ListNode | null> = [];

  while (lists.length > 1) {
    for (let i = 0; i < lists.length; i += 2) {
      const list1: ListNode | null = lists[i];
      const list2: ListNode | null = lists[i + 1] || null;
      pairwiseMergedLists.push(merge2Lists(list1, list2));
    }
    lists = pairwiseMergedLists;
  }

  return lists[0] || null;
}

function merge2Lists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // a dummy node serves to simplify the logic and cover edge cases
  // and to maintain a reference to the start of the list
  // {val: NaN, next: result}
  const dummyNode: ListNode = new ListNode(NaN);
  // handles the actual merging process
  let head: ListNode = dummyNode;

  // iterate through both lists
  // attach the smaller value
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }

    head = head.next;
  }

  // add what's left
  head.next = list1 || list2;

  return dummyNode.next;
}

// Leet Code Solution

function mergeKListsLeetCode(lists: Array<ListNode | null>): ListNode | null {
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
