export default function twoSum(nums: number[], target: number): number[] {
  return nums.reduce((acc, num, index, arr) => {
    const diff = target - num;
    const diffIndex = nums.indexOf(diff);
    console.log({ diff, diffIndex, index, arr });
    if (diffIndex !== -1 && diffIndex !== index) {
      acc.push(index, diffIndex);
      //   arr.splice(index, 1); // Remove the current element
      arr.shift();
    }
    return acc;
  }, [] as number[]);
}
