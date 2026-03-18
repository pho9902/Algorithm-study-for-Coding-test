const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(nStr) {
  let N = BigInt(nStr);

  if (N < 2n) return N.toString();

  let start = 1n;
  let end = N;
  let answer = 0n;

  while (start <= end) {
    let mid = (start + end) / 2n;
    let square = mid * mid;

    if (square === N) {
      return mid.toString();
    } else if (square < N) {
      answer = mid;
      start = mid + 1n;
    } else {
      end = mid - 1n;
    }
  }

  return answer.toString();
}

console.log(solution(input));
