//bubble

const arr = [
  24, 8, 1, 6, 98, 6, 53, 23, 22, 65, 89, 245, 25, 84, 245, 24, 2, 5, 332, 45,
  324, 54, 333, 23, 65,
];

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(solution(arr));
