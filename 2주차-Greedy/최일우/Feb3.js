const solution = (student, lost, reserve) => {
  student -= lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = lost.length - 1; i >= 0; i--) {
    const reserveIndex = reserve.lastIndexOf(lost[i]);
    if (reserveIndex !== -1) {
      lost.splice(i, 1);
      reserve.splice(reserveIndex, 1);
      student++;
    }
  }

  // 2. 남은 lost 학생들에 대해 빌려주기 로직을 하나로 통합
  for (let i = lost.length - 1; i >= 0; i--) {
    // 앞 번호(lost[i]-1) 또는 뒷 번호(lost[i]+1) 확인
    // 원하시는 우선순위에 따라 순서를 바꿀 수 있습니다.
    const front = reserve.lastIndexOf(lost[i] - 1);
    const back = reserve.lastIndexOf(lost[i] + 1);

    if (front !== -1) {
      lost.splice(i, 1);
      reserve.splice(front, 1);
      student++;
    } else if (back !== -1) {
      lost.splice(i, 1);
      reserve.splice(back, 1);
      student++;
    }
  }

  return student;
};
