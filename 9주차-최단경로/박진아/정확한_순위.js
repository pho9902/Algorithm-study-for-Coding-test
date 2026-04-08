const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = true;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (graph[i][k] && graph[k][j]) {
        graph[i][j] = true;
      }
    }
  }
}

let result = 0;

for (let i = 1; i <= n; i++) {
  let count = 0;

  for (let j = 1; j <= n; j++) {
    if (graph[i][j] || graph[j][i]) {
      count++;
    }
  }

  if (count === n - 1) result++;
}

console.log(result);
