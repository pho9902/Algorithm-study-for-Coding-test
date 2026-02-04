function solution(n, lost, reserve) {
  let realLost = lost
    .filter((i) => reserve.indexOf(i) === -1)
    .sort((a, b) => a - b);
  let realReserve = reserve
    .filter((i) => lost.indexOf(i) === -1)
    .sort((a, b) => a - b);

  let count = n - realLost.length;

  for (let i = 0; i < realLost.length; i++) {
    for (let j = 0; j < realReserve.length; j++) {
      if (
        realReserve[j] === realLost[i] - 1 ||
        realReserve[j] === realLost[i] + 1
      ) {
        count++;
        realReserve[j] = -1;
        break;
      }
    }
  }

  return count;
}
