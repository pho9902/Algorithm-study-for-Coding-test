const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const n = parseInt(input[0]);
const queries = [];
for (let i = 1; i <= n; i++) {
  queries.push(input[i].split(" ").map(Number));
}
//입력 queries -> 각 요청들이 담긴 배열

function solution(queries) {
  const obj = {};
  // key 무게, value 번호

  const answer = [];

  for (const query of queries) {
    if (query[0] === 1) {
      // 1번 보관
      const lockerNum = query[1];
      const ballWeight = query[2];
      obj[ballWeight] = lockerNum;
    } else {
      // 2번 찾기
      const ballWeight = query[1];
      answer.push(obj[ballWeight]);
    }
  }

  return answer;
}

console.log(solution(queries).join("\n"));
