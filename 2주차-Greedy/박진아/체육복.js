function solution(n, lost, reserve) {
  let answer = 0;
  const student = Array(n+1).fill(1);

  lost.forEach(i => student[i]--);
  reserve.forEach(i => student[i]++);

  for (let i = 1; i <= n; i++){
    if(student[i] === 0){
      if(i > 1 && student[i-1] === 2){
        student[i-1]--;
        student[i]++;
      } else if (i > 1 && student[i+1] === 2){
        student[i+1]--;
        student[i]++;
      }
    }
  }

  answer = student.filter(j => j>=1).length - 1;
  
  return answer;
}

/**
1. 모두(n)가 체육복이 있는(1) 행복한 학교 배열 만들기
(근데 왜 n+1이냐면 문제에서 주는 index를 그대로 쓰기위해서 1을 더함)
2. 도난 학생은 -1, 여벌 학생은 +1
3. 도난 학생(0) 앞 학생이 여벌체육복(2) 있으면 나눠줘
3-1. 없어? 뒷 학생(2)은 있대? 나눠줘
3-2. 둘 다 없대? 입지마
4. 체육복 있는(1이상) 학생값 리턴
(아까 +1 했으니까 -1)
 */