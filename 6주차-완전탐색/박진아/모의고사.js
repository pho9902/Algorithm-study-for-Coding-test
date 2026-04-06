function mockTest(answers) {
  const noMathPeople = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  const scores = new Array(noMathPeople.length).fill(0);

  answers.forEach((answer, i) => {
    noMathPeople.forEach((p, idx) => {
      if (answer === p[i % p.length]) {
        scores[idx]++;
      }
    });
  });

  const maxScore = Math.max(...scores);

  const result = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}