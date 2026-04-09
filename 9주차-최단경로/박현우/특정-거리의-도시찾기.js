const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").split("\n");
let lineIdx = 0;

const [N, M, K, X] = input[lineIdx++].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [u, v] = input[lineIdx++].split(" ").map(Number);
  graph[u].push(v);
}

const distance = new Array(N + 1).fill(-1);
distance[X] = 0;

const queue = [X];
let head = 0;

while (head < queue.length) {
  const current = queue[head++];
  for (const next of graph[current]) {
    if (distance[next] === -1) {
      distance[next] = distance[current] + 1;
      queue.push(next);
    }
  }
}

const result = [];

for (let i = 1; i <= N; i++) {
  if (distance[i] === K) {
    result.push(i);
  }
}

if (!result.length) {
  console.log(-1);
} else {
  console.log(result.join("\n"));
}
