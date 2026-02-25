const arr = [24, 8, 1, 6, 98, 6, 53, 23];

const solution = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
};

console.log(solution(arr));

//give up
