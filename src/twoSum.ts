export function twoSumReduce(nums: number[], target: number): number[] {
  return nums.reduce((acc, num, index, arr) => {
    const diff = target - num;
    const diffIndex = arr.slice(index + 1).indexOf(diff);
    if (diffIndex !== -1) {
      acc.push(index, diffIndex + index + 1);
    }
    return acc;
  }, [] as number[]);
}

export default function twoSumForLoop(
  nums: number[],
  target: number
): number[] {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numMap.has(diff)) {
      return [numMap.get(diff)!, i];
    }
    numMap.set(nums[i], i);
  }

  return [];
}
