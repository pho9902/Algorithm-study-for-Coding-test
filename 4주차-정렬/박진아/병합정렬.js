function mergeSort(arr) {
  // 반으로 쪼개기
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  // 왼쪽 배열 정렬
  for (let i = 0; i < leftArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < leftArr.length; j++) {
      if (leftArr[minIndex] > leftArr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = leftArr[minIndex];
      leftArr[minIndex] = leftArr[i];
      leftArr[i] = temp;
    }
  }

  // 오른쪽 배열 정렬
  for (let i = 0; i < rightArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < rightArr.length; j++) {
      if (rightArr[minIndex] > rightArr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = rightArr[minIndex];
      rightArr[minIndex] = rightArr[i];
      rightArr[i] = temp;
    }
  }

  const sortedArr = [];

  // 두 배열 합치기
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else sortedArr.push(rightArr.shift());
  }

  return sortedArr;
}

console.log(mergeSort([6, 3, 1, 5, 2, 4]));
