//출발지 A에서 E까지 가야함
//최단 시간을 구하는 함수작성

// 조건
// 모든 경로는 단방향
// 경로는 항상 존재

const edges = [
  ["A", "B", 1],
  ["A", "C", 4],
  ["B", "C", 2],
  ["B", "D", 5],
  ["C", "D", 1],
  ["D", "E", 3],
];

const solution = (edges) => {
  const result = {A: 0};

  for (let i = 0; i < 6; i++) {
    for (const edge of edges) {
      const start = edge[0];
      const end = edge[1];
      const time = edge[2];

      if (result[start] !== undefined) {
        const newTime = result[start] + time;

        if (result[end] === undefined || newTime < result[end]) {
          result[end] = newTime;
        }
      }
    }
  }

  return result["E"];
};

console.log(solution(edges));
