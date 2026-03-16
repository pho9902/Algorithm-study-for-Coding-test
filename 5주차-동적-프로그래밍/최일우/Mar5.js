const solution = (N) => {
  const dp = new Array(N).fill(0);

  if (N === 1) return 1;

  dp[0] = 1;
  dp[1] = 3;

  for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 796796;
  }

  return dp[N - 1];
};

const N = 3;
console.log(solution(N));
