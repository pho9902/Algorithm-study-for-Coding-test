const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const n = parseInt(input[0]);
const datas = [];

for (let i = 0; i < n; i++) {
  datas.push([input[i * 2 + 1], input[i * 2 + 2]]);
}
// datas -> [[도시, 주], [도시, 주] ...]

const obj = {};
let answer = 0;

for (const data of datas) {
  const city = data[0].substinrg(0, 2);

  if (city === data[1]) continue;

  if (obj[data[1] + city]) answer += obj[data[1] + city];
  obj[city + data[1]] = (obj[city + data[1]] || 0) + 1;

  // object 에 그대로 이어붙인 버전 저장
  // 거꾸로 붙인 버전으로 오브젝트 검사, 맞는게 있으면 해당 키로 저장된 밸류 answer 에 더하고
  // 그대로 이어붙인 버전 + 1 , obj 에 이 키가 없으면 1 할당
}

console.log(answer);
