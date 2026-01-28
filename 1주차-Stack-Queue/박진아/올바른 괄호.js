function solution(brackets){
    
  const check = [];

  for(let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(") {
        check.push(brackets[i]);
    } else {
        if (!check.length) {
            return false;
        }
        check.pop();
    }
  }
  return !check.length;
}

/*
1 주어진 문자열 길이 만큼 반복

2. 괄호가 ( 면 check에 push

3. 괄호가 ) 면
3-1. check가 비어있으면 false 반환
3-2. check가 비어있지 않으면 pop

4. 빈 괄호면 true, 뭐가 있으면 false
*/ 