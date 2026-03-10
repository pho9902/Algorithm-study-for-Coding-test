//Brute Force 가보자
const solution = (n, m, arr) => {
  let result = 0;

  //삼중 for문으로 했습니다
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum <= m && sum > result) {
          result = sum;
        }
      }
    }
  }

  return result;
};

const n = 5;
const m = 21;
const arr = [5, 6, 7, 8, 9];

console.log(solution(n, m, arr));
