const solution = (clothes) => {
  const object = {};

  for (const [dress, type] of clothes) {
    object[type] = (object[type] || 0) + 1;
  }

  const total = Object.keys(object).reduce((acc, cur) => {
    return acc * (object[cur] + 1);
  }, 1);

  return total - 1;
};
