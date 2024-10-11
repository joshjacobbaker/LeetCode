import addTwoNumbers, { arrayToLinkedList } from "./addTwoNumbers";

describe("addTwoNumbers", () => {
  it("should add two numbers represented by linked lists", () => {
    const l1 = arrayToLinkedList([2, 4, 3]);
    const l2 = arrayToLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(arrayToLinkedList([7, 0, 8]));
  });

  it("should handle single digit linked lists", () => {
    const l1 = arrayToLinkedList([0]);
    const l2 = arrayToLinkedList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(arrayToLinkedList([0]));
  });

  it("should handle linked lists of different lengths", () => {
    const l1 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToLinkedList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(arrayToLinkedList([8, 9, 9, 9, 0, 0, 0, 1]));
  });

  it("should return null if both linked lists are null", () => {
    const result = addTwoNumbers(null, null);
    expect(result).toBeNull();
  });

  it("should handle cases where one linked list is null", () => {
    const l1 = arrayToLinkedList([1, 2, 3]);
    const result = addTwoNumbers(l1, null);
    expect(result).toEqual(arrayToLinkedList([1, 2, 3]));
  });
});
