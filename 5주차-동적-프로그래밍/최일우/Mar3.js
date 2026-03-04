const solution = (n) => {
  const dp = [0, 0];

  for (let i = 2; i <= n; i++) {
    let minVal = dp[i - 1] + 1;

    if (i % 2 === 0) minVal = Math.min(minVal, dp[i / 2] + 1);
    if (i % 3 === 0) minVal = Math.min(minVal, dp[i / 3] + 1);
    if (i % 5 === 0) minVal = Math.min(minVal, dp[i / 5] + 1);

    dp.push(minVal);
  }

  console.log(dp[n]);
};

solution(26); //3
