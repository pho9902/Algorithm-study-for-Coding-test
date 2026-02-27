function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const rtnArr = [...arr];

  const pivot = rtnArr[Math.floor(rtnArr.length / 2)];
  const smaller = []; //피봇보다 작은애들
  const larger = []; // 피봇보다 큰애들
  const equal = []; // 같은애들

  for (const el of rtnArr) {
    if (el < pivot) smaller.push(el);
    else if (el > pivot) larger.push(el);
    else equal.push(el);
  }

  return [...quickSort(smaller), ...equal, ...quickSort(larger)];
}

console.log(quickSort([5, 3, 8, 4, 9, 13, 16, 12, 17]));
