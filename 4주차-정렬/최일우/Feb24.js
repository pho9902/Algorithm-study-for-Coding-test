const arr = [24, 8, 1, 6, 98, 6, 53, 23];

const solution = () => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  console.log(arr);
};

solution();
