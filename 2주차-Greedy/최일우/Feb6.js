const solution = (number, k) => {
  const stack = [];
  let countK = 0;

  for (let i = 0; i < number.length; i++) {
    if (stack.length) {
      while (
        countK < k &&
        stack.length > 0 &&
        stack[stack.length - 1] < number[i]
      ) {
        if (countK !== k) {
          stack.pop();
          countK++;
        }
      }
    }
    stack.push(number[i]);
  }

  return stack.slice(0, number.length - k).join("");
};

//1. stack이 비어있으면 일단 하나 넣고 시작
//2. 넣고 다음 들어오는 숫자랑 비교하여 stack 마지막에 들어있는 숫자보다 <= push
//3. 반복하다가 countK가 k랑 같아지면 나머지 그냥 푸시
//4. 마지막 k번 삭제를 못했을 경우 뒤에서 부터 number.length - k로 뒤 삭제
