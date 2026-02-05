const solution = (people, limit) => {
  people.sort((a, b) => a - b);
  let i = people.length - 1;
  let boatCount = 0;

  while (people.length > 0) {
    if (people[i] <= limit - 40 && people.length !== 1) {
      if (people[i] + people[0] <= limit) {
        people.shift();
        i--;
      }
    }
    people.pop();
    boatCount++;
    i--;
  }
  return boatCount;
};

// 코드 짤떄 길어졌던 코드 줄여서 줄여서 냈습니다
