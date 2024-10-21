export default function containerWithMostWater(height: number[]): number {
  const n = height.length;
  let maxArea = 0;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
