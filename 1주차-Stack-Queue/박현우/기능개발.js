function solution(progresses, speeds) {
  let bucket = [];
  const answer = [];

  let i = 0;

  while (progresses.length) {
    progresses[i] += speeds[i];
    i++;
    // 하루치 일감 진도 나가기, 인덱스 + 1

    if (progresses[0] < 100) {
      if (bucket.length) {
        answer.push(bucket.length);
        bucket = [];
      }

      if (i >= progresses.length) {
        i = 0;
      }
    } else {
      bucket.push("");
      progresses.shift();
      speeds.shift();
      i = 0;
    }
  }

  answer.push(bucket.length);
  return answer;
}

// 조건1 첫번째 일감이 끝나지 않았을 때 (progresses[0] 이 100보다 작을때)
// 조건1을 만족하고 i가 progresses의 length 보다 클 경우 i 초기화 해서 진도를 멈추지 않게 처리

// 조건1을 만족하지 못할 때 (progresses[0] 이 100보다 크거나 같을 때)
//bucket에 임의의 값을 넣고 progresses, speeds에서 0번 값을 빼 새로운 0번 값이 조건1에서 검사, 각 배열의 인덱스가 바뀌기 때문에 i 초기화

// 조건1을 만족하고 bucket에 요소가 존재할 때(0번 값이 끝나지 않은 상태일 때 더 이상 완료 될 작업이 없음) bucket의 길이(완료된 일감 개수)를 answer 에 push 후 bucket를 비운다.
// progresses에 요소가 남아있지 않을 때 까지 반복
