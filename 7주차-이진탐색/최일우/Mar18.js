const N = 5;
const Narr = [4, 1, 5, 2, 3];
const M = 5;
const Marr = [1, 3, 7, 9, 5];

const solution = (N, Narr, M, Marr) => {
  Narr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < M; i++) {
    let point = Marr[i];
    let find = 0;
    let low = 0;
    let high = N - 1;

    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      if (Narr[middle] === point) {
        find = 1;
        break;
      } else if (Narr[middle] < point) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
    result.push(find);
  }
  return result;
};

console.log(solution(N, Narr, M, Marr));
