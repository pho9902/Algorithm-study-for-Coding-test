function solution(priorities, location) {
  let answer = 0;
  const arr = [];

  priorities.map((x, i) => {
    arr.push({x, i});
  });

  let pointer = 0;

  while(arr.length) {
    pointer = pointer % arr.length;
    const temp = [];
    for (let j = 0; j < arr.length; j++) {
      temp.push(arr[j].x);
    }
    let max = Math.max(...temp);
    if (arr[pointer].x >= max) {
      if (arr[pointer].i === location) {
        answer++;
        return answer;
      } else {
        answer++;
        arr.splice(pointer, 1);
      }
    } else {
      pointer++;
    }
  }
}


/*
1. 우선순위와 index가 담긴 객체 배열(arr) 생성
2. arr의 길이만큼 반복
3. 해당 값의 우선순위가 제일 높을때(프로세스가 실행될 때)
3-1. location과 일치하면 return
3-2. 아니면 해당 인덱스 슬라이싱

4. 프로세스가 실행 안 되는 조건일 때
4-1. 다음 인덱스
*/