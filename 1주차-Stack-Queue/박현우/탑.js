const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);
const inputWithOutN = input.slice(1);

function solution(towers) {
  const answer = [];
  const stack = [];

  towers.forEach((tower, idx) => {
    while (stack.length > 0 && stack[stack.length - 1].height < tower) {
      stack.pop();
    }
    // 스택에 요소가 있고  스택에 가장 최근에 들어온 값의 높이가 현재 탑 높이보다 작을 경우 스택에서 제거
    // 어차피 현재 탑에 가려저서 정답 배열에 들어갈 일이 없음
    // 반복이 끝난 후 스택에 탑이 남았나 안남았나 검사
    if (stack.length) {
      answer.push(stack[stack.length - 1].idx);
      // 남아있으면 그 탑이 수신을 받는 탑이니 해당 요소의 idx 키값 정답배열에 push
    } else {
      answer.push(0);
      // 남아있지 않으면 현재 탑이 가장 큰 탑이기 때문에 수신 불가능 0 push
    }
    stack.push({ height: tower, idx: idx + 1 });
    //현재 탑의 정보 스택에 저장
    //idx에 1 뭍여야 정답 처리 됨
  });
  return answer;
}

console.log(solution(inputWithOutN).join(" "));
