import {
  ListNode,
  mergeKLists,
  getListAsArray,
  append,
  getArrayAsListArray,
} from "./mergeKLists";
describe("mergeKLists", () => {
  it("should merge multiple sorted linked lists into one sorted linked list", () => {
    const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const list3 = new ListNode(2, new ListNode(6));
    const result = mergeKLists([list1, list2, list3]);
    const expected = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
          )
        )
      )
    );
    expect(result).toEqual(expected);
  });

  it("should return null when the input is an empty array", () => {
    const result = mergeKLists([]);
    expect(result).toBeNull();
  });

  it("should return the single list when the input contains only one list", () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3)));
    const result = mergeKLists([list]);
    expect(result).toEqual(list);
  });

  it("should handle lists with null values", () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
    const result = mergeKLists([list1, null]);
    expect(result).toEqual(list1);
  });
});

describe("getListAsArray", () => {
  it("should convert a linked list to an array", () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3)));
    const result = getListAsArray(list);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return an empty array for a null list", () => {
    const result = getListAsArray(null);
    expect(result).toEqual([]);
  });
});

describe("append", () => {
  it("should append a value to the end of the list", () => {
    const list = new ListNode(1, new ListNode(2));
    const result = append(list, 3);
    const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(result).toEqual(expected);
  });

  it("should create a new list with the value if the list is null", () => {
    const result = append(null, 1);
    const expected = new ListNode(1);
    expect(result).toEqual(expected);
  });
});

describe("getArrayAsListArray", () => {
  it("should convert an array to a linked list", () => {
    const array = [1, 2, 3];
    const result = getArrayAsListArray(array);
    const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(result).toEqual(expected);
  });

  it("should return null for an empty array", () => {
    const result = getArrayAsListArray([]);
    expect(result).toBeNull();
  });
});
