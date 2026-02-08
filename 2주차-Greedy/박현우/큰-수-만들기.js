function solution(number, k) {
  const stack = [];

  for (const current of number) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
      stack.pop();
      k--;
    }
    stack.push(current);
  }

  return stack.slice(0, stack.length - k).join("");
}
