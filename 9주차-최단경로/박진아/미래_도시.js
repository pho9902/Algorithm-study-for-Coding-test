const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const [x, k] = input[m + 1].split(" ").map(Number);

function futureCity(start, target) {
  const visited = Array(n + 1).fill(false);
  const queue = [[start, 0]];
  let head = 0;

  visited[start] = true;

  while (head < queue.length) {
    const [node, time] = queue[head++];

    if (node === target) return time;

    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];

      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, time + 1]);
      }
    }
  }

  return -1;
}

const first = futureCity(1, k);
if (first === -1) return console.log(-1);

const second = futureCity(k, x);
if (second === -1) return console.log(-1);

console.log(first + second);
