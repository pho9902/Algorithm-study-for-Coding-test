function solution(triangle) {
  const n = triangle.length;
  const dp = [...triangle[n - 1]];

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + (dp[j] > dp[j + 1] ? dp[j] : dp[j + 1]);
    }
  }

  return dp[0];
}

// 효율성 실패
// function solution(triangle) {
//   for (let i = triangle.length - 2; i >= 0; i--) {
//     for (let j = 0; j < triangle[i].length; j++) {
//       triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
//     }
//   }
//   return triangle[0][0];
// }
