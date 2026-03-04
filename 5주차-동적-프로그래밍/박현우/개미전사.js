function solution(n, storage) {
  const dp = new Array(n).fill(0);

  dp[0] = storage[0];
  dp[1] = Math.max(storage[0], storage[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + storage[i]);
  }

  return dp[n - 1];
}

console.log(solution(4, [1, 3, 1, 5]));
console.log(solution(4, [10, 20, 30, 11]));
console.log(solution(5, [1, 3, 5, 7, 9]));
