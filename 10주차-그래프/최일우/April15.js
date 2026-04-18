const solution = (n, m, wood) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let row = false;
    if (wood[i][j] === "-") {
      if (!wood) {
        count++;
        row = true;
      } else {
        row = false;
      }
    }
  }

  for (let j = 0; j < m; j++) {
    let column = false;
    for (let i = 0; i < n; i++) {
      if (floor[i][j] === "|") {
        if (!column) {
          count++;
          column = true;
        }
      } else {
        column = false;
      }
    }
  }
};
