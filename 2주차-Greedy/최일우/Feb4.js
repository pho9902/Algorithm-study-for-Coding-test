const solution = (name) => {
  for (let i = 0; i < name.length; i++) {}
  return console.log("Z".charCodeAt(0));
};
//1. 먼저 커서로 위치를 잡는다
//1-1. name.length - lastIndexOf와 indexOf 구한 값을 비교해 같거나 작으면 앞에서 부터
// 크면 뒤에서 부터 진행
//고민: 알파벳 만들기 성공했으면 그 알파벳을 없애야하나

//2. 위치를 잡으면 아스키코드값 비교하여 중간보다 작을경우 앞에서 부터 count세고 크면 뒤부터 셈

//사실 알파벳 바꾸는건 쉬운데 커서 이동이 너무 어려웠음
//밑에건 시도해본 예시

// AAAA
// ABCA
// A === 65, Z === 80

// AAAAAAAAAAAAAAAAAAAA
// AABBAAAAAA / AAAAAAAABB 13
// for(let i = 0; i < name.length; i++){
//     if()
// }
