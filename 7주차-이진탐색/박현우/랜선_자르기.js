const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [K, N] = input[0].split(" ").map(Number);
const cables = input.slice(1).map(Number);

let low = 1;
let high = Math.max(...cables);
let result = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let count = 0;

  for (let i = 0; i < K; i++) {
    count += Math.floor(cables[i] / mid);
  }

  if (count >= N) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
