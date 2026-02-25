function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curIndex = i - 1;
    let curValue = arr[i];
    while (curIndex >= 0 && arr[curIndex] > curValue) {
      arr[curIndex + 1] = arr[curIndex];
      curIndex--;
    }
    arr[curIndex + 1] = curValue;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([1, 3, 5, 4, 2, 6]));
