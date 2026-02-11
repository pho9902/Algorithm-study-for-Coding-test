function solution(nums) {
  const counter = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!counter[nums[i]]) {
      counter[nums[i]] = 1;
    }
  }

  const count = Object.keys(counter).length;
  const mon = nums.length / 2;

  return Math.min(count, mon);
}

/**
 * 포켓몬 종류 수를 구함
 * 선택 가능 수(n/2)를 구함
 * 둘 중 작은 값
 */