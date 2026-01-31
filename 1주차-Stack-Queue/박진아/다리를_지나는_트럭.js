function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = new Array(bridge_length).fill(0);
  let currentBridge = 0;

  while(truck_weights.length > 0 || currentBridge > 0) {

    currentBridge -= bridge.shift();
    answer++;

    if(truck_weights.length > 0) {
      if(currentBridge + truck_weights[0] <= weight) {
        const newTruck = truck_weights.splice(0,1)[0];
        currentBridge += newTruck;
        bridge.push(newTruck);
      } else bridge.push(0);
    }
  }
  return answer;
}


/*
1. 다리 길이만큼 0으로 채워진 배열 생성

2. 트럭 수 만큼 반복
2-1. 트럭 넣기
2-2. 시간 째깍째깍

3. 건널 트럭이 남았는데
4. 건너는 트럭이랑 대기 트럭의 합이 견딜 수 있는 무게 이하일 때
4-1. 다리에 더 넣어
4-2. 아니면 하나만 보내

*/