function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => b - a);

  let first = 0;
  let last = people.length - 1;

  while (first <= last) {
    count += 1;
    if (people[first] + people[last] <= limit) {
      last -= 1;
    }
    first += 1;
  }

  return count;
}
