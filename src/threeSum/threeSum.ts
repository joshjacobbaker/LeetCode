export default function threeSum(input: number[]): number[][] {
  const result: number[][] = [];
  const sortedInput = input.sort((a, b) => a - b);

  for (let i = 0; i < sortedInput.length; i++) {
    if (i > 0 && sortedInput[i] === sortedInput[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sortedInput.length - 1;

    while (left < right) {
      const sum = sortedInput[i] + sortedInput[left] + sortedInput[right];
      if (sum === 0) {
        result.push([sortedInput[i], sortedInput[left], sortedInput[right]]);
        left++;
        right--;

        while (left < right && sortedInput[left] === sortedInput[left - 1]) {
          left++;
        }
        while (left < right && sortedInput[right] === sortedInput[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
