const fs = require("fs");

const BUF_SIZE = 65536;
const buf = Buffer.alloc(BUF_SIZE);
let bytesRead = 0;
let pos = 0;

function nextInt() {
  let num = 0;
  while (true) {
    if (pos >= bytesRead) {
      bytesRead = fs.readSync(0, buf, 0, BUF_SIZE);
      pos = 0;
      if (bytesRead === 0) return num;
    }
    let byte = buf[pos++];
    if (byte >= 48 && byte <= 57) {
      num = num * 10 + (byte - 48);
    } else if (num > 0) {
      return num;
    }
  }
}

const N = nextInt();
const K = nextInt();

const jewels = [];
for (let i = 0; i < N; i++) {
  jewels.push([nextInt(), nextInt()]);
}

const bags = [];
for (let i = 0; i < K; i++) {
  bags.push(nextInt());
}

// input
// N: 보석 개수 K: 가방 개수 jewels: 보석 정보 배열[[무게, 가격],[무게, 가격]] bags: 가방 정보 배열 [무게, 무게]
// logic
// 1. 무게 제한이 있는 가방을 작은 순서대로 확인해 담을수 있는 가장 비싼 보석을 담는다.
//   1-1. 반복으로 가방에 담길수 있는 보석들 bucket에 담고
//   1-2. bucket 에 담긴 가장 비싼거 answer +=
// 2. 이미 담긴 보석은 빼고 검사
// 3. 시간초과 주의

bags.sort((a, b) => a - b);
jewels.sort((a, b) => a[0] - b[0]); // jewel[0] -> 무게

const bucket = [];
let jewelPointer = 0;

for (const bag of bags) {
  while (jewelPointer < N && bag >= jewels[jewelPointer][0]) {
    bucket.push(jewels[jewelPointer][1]);
    jewelPointer++;
  }
  // answer += Math.max(...bucket);
}

console.log(answer);
