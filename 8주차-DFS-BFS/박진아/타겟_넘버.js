function targetNumber(numbers, target) {
  let result = 0;

  function dfs(i, total) {
    if (i === numbers.length) {
      if (total === target) result++;
      return;
    }

    const nextNum = numbers[i];

    dfs(i + 1, total + nextNum);
    dfs(i + 1, total - nextNum);
  }

  dfs(0, 0);

  return result;
}
