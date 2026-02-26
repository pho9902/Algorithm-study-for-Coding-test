function mergeSort(arr) {
  let step = 1;
  let result = [...arr];
  const n = result.length;

  while (step < n) {
    const temp = [];
    for (let i = 0; i < n; i += step * 2) {
      let left = i;
      let middle = Math.min(i + step, n);
      let right = Math.min(i + step * 2, n);

      let l = left;
      let r = middle;

      while (l < middle && r < right) {
        if (result[l] <= result[r]) {
          temp.push(result[l]);
          l++;
        } else {
          temp.push(result[r]);
          r++;
        }
      }

      while (l < middle) {
        temp.push(result[l]);
        l++;
      }

      while (r < right) {
        temp.push(result[r]);
        r++;
      }
    }
    result = temp;
    step *= 2;
  }

  return result;
}

const data = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(data));
