function theSmallestRectangle(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const [w, h] of sizes) {
    const long = Math.max(w, h);
    const short = Math.min(w, h);

    maxWidth = Math.max(maxWidth, long);
    maxHeight = Math.max(maxHeight, short);
  }

  return maxWidth * maxHeight;
}