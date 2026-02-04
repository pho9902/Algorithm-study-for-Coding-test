function solution(name) {
  let answer = 0;
  const nameArr = [...name];
  const nameAsc = [];

  for (const asc of nameArr) {
    nameAsc.push(asc.codePointAt() - 65);
  }

  console.log(nameAsc);

  for (let i of nameAsc) {
    if (i > 13) {
      answer += 26 - i;
    } else {
      answer += i;
    }

    if (i !== nameAsc.at(-1)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("JAN"));

/**
 * name을 쪼개서 배열에 넣음
 * (알파벳을 아스키코드로 변환한 값 - 65) 한 값을 배열에 넣음
 (왜 65를 뺀 값을 넣었냐면 어차피 초깃값인 A부터 시작하니까 그 차이만 필요함)

1. name길이만큼 반복
2. 차이를 answer에 더할건데
2-1. 근데 차이가 13이상이면 (26 - 차이) 만큼 answer에 더해
4. 다음 알파벳 => answer++;
5. answer 리턴


만약 B면 66이니까 기본값A인 65를 뺍니다 그럼 1이 나오죠 그걸 answer에 더함
만약 S면 83이니까 기본값A인 65를 뺍니다 그럼 18이 나오죠
그럼 13보다 크니까 26- 18한 값을 answer에 더합니다



A : 65
~
Z : 90

25 1
24 2
23 3
22 4
21 5
20 6
19 7
18 8
17 9
16 10
15 11
14 12
13 13
 */
