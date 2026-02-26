function insertSort(arr) {
  const rtnArr = [...arr];

  for (let i = 1; i < rtnArr.length; i++) {
    let cur = rtnArr[i];
    let j = i - 1;

    while (j >= 0 && rtnArr[j] > cur) {
      rtnArr[j + 1] = rtnArr[j];
      j--;
    }

    rtnArr[j + 1] = cur;
  }

  return rtnArr;
}

console.log(insertSort([3, 1, 9, 7, 45, 13, 28, 8]));
console.log(insertSort([10000, 1000, 100, 10]));
