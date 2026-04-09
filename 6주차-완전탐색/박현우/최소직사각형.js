function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([w, h]) => {
    maxWidth = Math.max(maxWidth, Math.min(w, h));
    maxHeight = Math.max(maxHeight, Math.max(w, h));
  });

  return maxWidth * maxHeight;
}
