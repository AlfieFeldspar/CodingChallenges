//brute force solution

function triplets(t, d) {
  // a+b+c <= t
  let counter = 0;
  // let dMap = {};
  if (d.length === 0) {
    return 0;
  }
  // d[i]>=0, so remove numbers larger than target.
  d.sort((a, b) => a - b);
  d.filter((number) => number < t);
  for (let i = 0; i < d.length; i++) {
    for (let j = i + 1; j < d.length; j++) {
      for (let k = j + 1; k < d.length; k++) {
        if (d[i] + d[j] + d[k] <= t) {
          counter++;
        }
      }
    }
  }
  return counter;
}
//5of9 passed
