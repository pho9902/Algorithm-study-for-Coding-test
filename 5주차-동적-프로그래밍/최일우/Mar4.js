const solution = (N, foodhouse) => {
  const dp = new Array(100).fill(0); //식량 창고의 최대 개수가 100개

  dp[0] = foodhouse[0]; //첫 번째 저장
  dp[1] = Math.max(foodhouse[0], foodhouse[1]); // 두번째 저장
  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + foodhouse[i]);
  }

  return dp[N - 1];
};

let N = 4;
let foodhouse = [1, 3, 1, 5];
console.log(solution(N, foodhouse));
