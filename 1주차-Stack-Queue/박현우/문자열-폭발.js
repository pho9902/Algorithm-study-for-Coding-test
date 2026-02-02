// 1. 문자열 반복
// 2. 현재 문자열 stack 에 넣고
// 3. Stack 길이가 폭발문자열 길이랑 같거나 클 때 폭발문자열 길이만큼 합쳐서 검사
// 4. 일치하면 길이만큼 빼고 일치하지 않으면 다음 반복
const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");
const inputStr = input[0];
const bombStr = input[1];

const stack = [];
const bombLen = bombStr.length;

for (const eachChar of inputStr) {
  stack.push(eachChar);

  if (stack.length >= bombLen && stack.slice(-bombLen).join("") === bombStr) {
    stack.splice(-bombLen);
  }
}

console.log(stack.length ? stack.join("") : "FRULA");
