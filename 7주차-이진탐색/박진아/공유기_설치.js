const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const houses = input.slice(1).map(Number).sort((a, b) => a - b);

function installWIFI(distance) {
  let wifi = 1;
  let prev = houses[0];

  for (let i = 1; i < N; i++) {
    if (houses[i] - prev >= distance) {
      wifi++;
      prev = houses[i];
    }
  }

  return wifi >= C;
}

let minDis = 1;
let maxDis = houses[N - 1] - houses[0];
let best = 0;

while (minDis <= maxDis) {
  const mid = Math.floor((minDis + maxDis) / 2);

  if (installWIFI(mid)) {
    best = mid;
    minDis = mid + 1;
  } else {
    maxDis = mid - 1;
  }
}

console.log(best);