const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const cables = input.slice(1).map(Number);

let minLen = 1;
let maxLen = Math.max(...cables);
let best = 0;

function cutLanCable(len) {
  let total = 0;

  for (const cable of cables) {
    total += Math.floor(cable / len);
  }

  return total;
}

while (minLen <= maxLen) {
  const mid = Math.floor((minLen + maxLen) / 2);

  if (cutLanCable(mid) >= N) {
    best = mid;
    minLen = mid + 1;
  } else {
    maxLen = mid - 1;
  }
}

console.log(best);