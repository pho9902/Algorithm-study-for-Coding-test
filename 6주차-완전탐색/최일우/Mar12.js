const solution = (brown, yellow) => {
  const sum = brown + yellow;

  for (let i = 1; i <= Math.floor(sum / 2); i++) {
    if (sum % i === 0) {
      let width = i;
      let height = sum / i;

      if (width >= height && (width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
};

let brown = 10;
let yellow = 2;
console.log(solution(brown, yellow));
brown = 8;
yellow = 1;
console.log(solution(brown, yellow));
