const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

const dp = new Array(M + 1).fill(10001);

dp[0] = 0;

for (let coin of coins) {
  for (let i = coin; i <= M; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

console.log(dp[M] === 10001 ? -1 : dp[M]);