const solution = (s) => {
  const arr = [];
  for (let elem of s) {
    if (elem === ")" && arr.length === 0) {
      return false;
    } else if (elem === "(") {
      arr.push(elem);
    } else {
      arr.pop();
    }
  }

  return !arr.length ? true : false;
};

//고수답게 삼항연산자 사용해봤어요
