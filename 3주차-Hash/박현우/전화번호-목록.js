function solution(phoneBook) {
  const phoneSet = new Set(phoneBook); //Set객체 생성

  for (const phoneNumber of phoneBook) {
    // 전체 배열 반복
    for (let i = 1; i < phoneNumber.length; i++) {
      // 현재 번호의 길이만큼 반복
      if (phoneSet.has(phoneNumber.substring(0, i))) {
        // Set 객체에 현재 번호를 잘라낸(일부 === 접두사) 번호가 Set객체에 있을 경우 false 리턴
        return false;
      }
    }
  }

  return true;
}
