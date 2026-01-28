function solution(prices) {
  const stack = [];
  const answer = prices.map((_, maxSec) => prices.length - 1 - maxSec);

  prices.forEach((curPrice, curIndex) => {
    while (stack.length && prices[stack.at(-1)] > curPrice) {
      const fallIndex = stack.pop();
      answer[fallIndex] = curIndex - fallIndex;
    }
    stack.push(curIndex);
  });

  return answer;
}

// 1. 역순의 인덱스를 값으로 받는 answer 배열 생성 (가격 하락이 없는 경우)
// 2. prices 배열 반복
// 3. 현재 index 를 스택에 넣고 계속 반복
// 4. while 조건(스택에 요소가 있고 스택에 가장 최근 들어온 값이 현재 값보다 작으면 = 가격하락)
// 5. 스택에 가장 최근 들어온 값을 빼고 그 인덱스 answer 요소 변경
// prices 반복 N stack 반복 최대 N번 2N O(N)

// 시간초과 난 코드1
// 전체 배열 prices에 findIndex 를 사용해서 시간 복잡도가 O(N^2)이 되며 테스트 통과 실패
// function solution(prices) {
//     const answer = [];
//     const totalTime = prices.length;
//     let standardSec = 0;

//     while(prices.length) {
//         const curPrice = prices.shift()
//         const indexOfLow = prices.findIndex((low) => curPrice > low)
//         if(indexOfLow < 0) {
//             answer.push(totalTime - standardSec - 1)
//         } else {
//             answer.push(indexOfLow + 1)
//         }
//         standardSec++

//     }

//     return answer
// }

// 시간초과 난 코드2
// 최악의 경우 O(N^2)과 근사한 복잡도를 가질 것 같아서 구현 중단
// function solution(prices) {
//   const answer = [];

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] > prices[j]) {
//         answer.push(j - i);
//         break;
//       }
//     }

//     answer.length !== i && answer.push(prices.length - i);
//   }

//   return answer;
// }
