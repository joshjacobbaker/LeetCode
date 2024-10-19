// export default function isMatch(s: string, p: string): boolean {
//   const m = s.length;
//   const n = p.length;

//   // Create a 2D DP table with default false values
//   const dp = Array(m + 1)
//     .fill(null)
//     .map(() => Array(n + 1).fill(false));

//   // Base case: empty string and empty pattern are a match
//   dp[0][0] = true;

//   // Base case: patterns like a*, a*b*, a*b*c* can match with an empty string
//   for (let j = 1; j <= n; j++) {
//     if (p[j - 1] === "*") {
//       dp[0][j] = dp[0][j - 2];
//     }
//   }

//   // console.log({ dp, s: ["", ...s], p: ["", ...p] });

//   // Fill the DP table
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       // If the current characters match or pattern has '.', carry forward the diagonal value
//       if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
//         dp[i][j] = dp[i - 1][j - 1];
//       }
//       // If the pattern has '*', it can either match zero or more of the preceding element
//       else if (p[j - 1] === "*") {
//         // Zero occurrence of the preceding element
//         console.log({ zerorMorePrecedingAsterisk: dp[i][j - 2] });
//         dp[i][j] = dp[i][j - 2];
//         // One or more occurrence of the preceding element
//         if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
//           console.log({ oneOrMorePrecedingAsterisk: dp[i][j] || dp[i - 1][j] });
//           dp[i][j] = dp[i][j] || dp[i - 1][j];
//         }
//       }
//     }
//   }

//   console.log({ dp, s: ["", ...s], p: ["", ...p] });
//   // The result is in the bottom-right cell of the DP table
//   return dp[m][n];
// }

export default function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return true;
}
