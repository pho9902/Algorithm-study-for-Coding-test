const n = 4;
const m = 5;
const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

const solution = (x, y) => {
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  if (graph[x][y] === 0) {
    graph[x][y] = 1;

    solution(x - 1, y);
    solution(x + 1, y);
    solution(x, y - 1);
    solution(x, y + 1);

    return true;
  }
  return false;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (solution(i, j) === true) {
      answer += 1;
    }
  }
}

console.log(answer);
