const solution = (N, arr, M) => {
  arr.sort((a, b) => a - b);
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (sum <= M) {
    return Math.max(...arr);
  }

  let start = 0;
  let end = Math.max(...arr);
  let result = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let a = 0;
      if (arr[i] > middle) {
        a = middle;
      } else {
        a = arr[i];
      }
      sum += a;
    }

    if (sum <= M) {
      result = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return result;
};

const N1 = 4;
const N1arr = [120, 110, 140, 150];
const M1 = 485;
const N2 = 5;
const N2arr = [70, 80, 30, 40, 100];
const M2 = 450;

console.log(solution(N1, N1arr, M1));
console.log(solution(N2, N2arr, M2));
