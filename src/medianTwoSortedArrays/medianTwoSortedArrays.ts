// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // merge the two arrays
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = merged.length;

  // check if the length of the merged array is even
  if (length % 2 === 0) {
    // if even, return the average of the two middle elements
    return (merged[length / 2 - 1] + merged[length / 2]) / 2;
  } else {
    // if odd, return the middle element
    return merged[Math.floor(length / 2)];
  }
}
