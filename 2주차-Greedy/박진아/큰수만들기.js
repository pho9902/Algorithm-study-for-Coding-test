function solution(number, k) {
  const stack = [];

  for (const i of number) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] < i) {
      stack.pop();
      k--;
    }
    stack.push(i);
  }

  if (k > 0) {
    stack.splice(stack.length - k, k);
  }

  return stack.join("");
}

/**
1. number만큼 반복
2. stack에 숫자를 일단 넣음
2. 다음 숫자 비교해서 큰놈이 이김 지면 죽는거야
3. k번 죽으면 끝
 */
