const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

let count = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    count++;
  } else if (i < 1000) {
    const [a, b, c] = String(i).split("").map(Number);

    if (b - a === c - b) {
      count++;
    }
  }
}

console.log(count);
