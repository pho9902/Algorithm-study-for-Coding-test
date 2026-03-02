const arr = [24, 8, 1, 6, 98, 6, 53, 23];

const solution = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...solution(left), pivot, ...solution(right)];
};

console.log(solution(arr));
