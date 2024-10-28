import threeSum from "./threeSum";

describe("threeSum", () => {
  it("should return all unique triplets that sum up to zero", () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const output = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(input)).toEqual(output);
  });

  it("should return an empty array if no triplets sum up to zero", () => {
    const input = [1, 2, 3, 4, 5];
    const output: number[][] = [];
    expect(threeSum(input)).toEqual(output);
  });

  it("should handle an empty input array", () => {
    const input: number[] = [];
    const output: number[][] = [];
    expect(threeSum(input)).toEqual(output);
  });

  it("should handle input with all zeros", () => {
    const input = [0, 0, 0, 0];
    const output = [[0, 0, 0]];
    expect(threeSum(input)).toEqual(output);
  });

  it("should handle input with no possible triplets", () => {
    const input = [1, -1, -1, 2];
    const output = [[-1, -1, 2]];
    expect(threeSum(input)).toEqual(output);
  });
});
