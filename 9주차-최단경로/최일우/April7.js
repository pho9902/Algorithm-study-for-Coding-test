//플로이드 워셜 알고리즘으로 구현
//  n = 전체 회사의 개수
//  m = 경로의 개수
//  x = 최종 목적지
//  k = 소개팅 장소

const solution = (n, m, edges, x, k) => {
  const INFINITY = Infinity;
  const graph = [];

  for (let i = 0; i < n + 1; i++) {
    graph[i] = new Array(n + 1).fill(INFINITY);
  }

  // 그래프를 무한으로 초기화하고 자기 자신으로 가는 비용은 0으로 초기화
  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (const [a, b] of edges) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (graph[j][i] + graph[i][k] < graph[j][k]) {
          graph[j][k] = graph[j][i] + graph[i][k];
        }
      }
    }
  }

  const distance = graph[1][k] + graph[k][x];

  if (distance >= INFINITY) {
    console.log("-1");
  } else {
    console.log(distance);
  }
};
