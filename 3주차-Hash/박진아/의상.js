function solution(clothes) {
    let answer = 1;
    const koni = {};

    for(const [name, type] of clothes) {
      koni[type] = (koni[type] || 0) + 1;
    }

    for(const count of Object.values(koni)) {
      answer *= (count + 1);
    }
    
    return answer - 1;
}

/*
 * 경우의 수...
 * (type값+1)을 다 곱해서 - 1
 * 
 * ex) 2 3 4 => (2+1)*(3+1)*(4+1)-1 = 59
 * 각 항목에 1을 더한 이유는 안 입는 경우도 있으니까
 * 마지막에 1을 왜 빼냐면 다 안 입는 경우를 뺌
 * 
 * 1 1 1
 * 1 1 1
 * 0 1 1
 *   0 1
 *     0
 * 
 * 문제가 좀 어이없네 옷은 당연히 위,아래 다 입는게 아닌가
 * 하루에 최소 한 개의 의상을 입는게 무슨 소린지,,
 * crow_mask 같은건 왜 착용하는 걸까,, 할로윈인가,,,
 * 
 * 코니는 남자일까요 여자일까요
 * 남자면 conny, 여자면 connie로 보통 쓴다고 하네요
 * 그치만 그냥 모르겠으므로 koni로 썼습니다
 */