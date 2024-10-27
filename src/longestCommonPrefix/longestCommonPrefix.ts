export default function longestCommonPrefix(strs: string[]): string {
  let longestCommonPrefix = "";
  let currentLongestCommonPrefix = "";
  let currentCommonPrefix = "";
  // create a pointer for every string in the input array
  let pointerLeft = 0;
  let pointerRight = 0;
  let currentChar = "";
  let nextChar = "";

  // If the input array is empty, return an empty string
  if (strs.length === 0) {
    return "";
  }

  // If the input array is empty, return an empty string
  if (strs.length === 1) {
    return strs[0];
  }
  // iterate over the input array
  for (let i = 0; i < strs.length; i++) {
    currentCommonPrefix = "";
    pointerLeft = 0;
    pointerRight = 0;

    // iterate over the characters of the current string and the next string
    for (let j = 0; j < strs[i].length; j++) {
      // set first pointer to the first character of the first string
      currentChar = strs[i][j];
      if (strs[i + 1]?.length >= j) {
        nextChar = strs[i + 1][j];
      } else {
        nextChar = "";
      }
      // compare the current character of the first string with the current character of the second string
      if (currentChar === nextChar) {
        currentCommonPrefix += currentChar;

        if (
          i === 0 ||
          currentCommonPrefix[pointerRight] ===
            longestCommonPrefix[pointerRight]
        ) {
          pointerRight++;
          currentLongestCommonPrefix = currentCommonPrefix;
        }

        if (currentLongestCommonPrefix.length > longestCommonPrefix.length) {
          longestCommonPrefix = currentCommonPrefix;
        }
      } else {
        currentCommonPrefix = "";
        pointerLeft = 0;
        pointerRight = 0;
        continue;
      }
    }
    if (currentLongestCommonPrefix.length >= 1) {
      longestCommonPrefix = currentLongestCommonPrefix;
    } else {
      longestCommonPrefix = "";
      break;
    }
  }
  return longestCommonPrefix;
}
