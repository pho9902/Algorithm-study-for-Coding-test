function solution(word) {
  const vowel = ["A", "E", "I", "O", "U"];
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(vowel[i]);
    for (let j = 0; j < 5; j++) {
      arr.push(vowel[i] + vowel[j]);
      for (let k = 0; k < 5; k++) {
        arr.push(vowel[i] + vowel[j] + vowel[k]);
        for (let l = 0; l < 5; l++) {
          arr.push(vowel[i] + vowel[j] + vowel[k] + vowel[l]);
          for (let m = 0; m < 5; m++) {
            arr.push(vowel[i] + vowel[j] + vowel[k] + vowel[l] + vowel[m]);
          }
        }
      }
    }
  }

  return arr.sort().indexOf(word) + 1;
}
