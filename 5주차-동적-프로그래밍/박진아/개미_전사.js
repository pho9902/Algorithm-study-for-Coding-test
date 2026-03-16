const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const K = input[1].split(" ").map(Number);

function antWarrior(N, K) {
  if(N === 1) return K[0];

  const dp = new Array(N).fill(0);

  dp[0] = K[0];
  dp[1] = Math.max(K[0], K[1]);

  for(let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + K[i]);
  }

  return dp[N - 1];
}

console.log(antWarrior(N,K));