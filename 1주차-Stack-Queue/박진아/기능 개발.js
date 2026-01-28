function solution(progresses, speeds) {
    var answer = [];
    
    while (speeds.length > 0) {
        let count = 0;
        for (let i = 0; i < speeds.length; i++) {
            if(progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        if(count > 0) {
            answer.push(count);
        }
    }
    return answer;
}

/*

1. 모든 작업 완료까지 반복
1-1. 작업 진도에 작업 속도 더하기
1-2. 작업 진도가 100이 되면 
    작업에서 제외 && 작업 속도 제외 && 카운트 적립
1.3. 카운트 적립한 걸 anwer에 push

 */