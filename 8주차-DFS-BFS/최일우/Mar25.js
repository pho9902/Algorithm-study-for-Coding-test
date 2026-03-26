const N = 5;
const M = 6;
const arr = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

const solution = (startx, starty) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[startx, starty]];

  while (queue.lenght > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        continue;
      }

      if (arr[nx][ny] === 1) {
        arr[nx][ny] = arr[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return arr[N - 1][M - 1];
};
