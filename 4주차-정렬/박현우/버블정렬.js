function bubbleSort(arr) {
  const rtnArr = [...arr];
  for (let i = 0; i < rtnArr.length - 1; i++) {
    for (let j = 0; j < rtnArr.length - 1 - i; j++) {
      if (rtnArr[j] > rtnArr[j + 1]) {
        [rtnArr[j], rtnArr[j + 1]] = [rtnArr[j + 1], rtnArr[j]];
      }
    }
  }
  return rtnArr;
}

console.log(bubbleSort([4, 3, 2, 1, 22, 11, 100]));
