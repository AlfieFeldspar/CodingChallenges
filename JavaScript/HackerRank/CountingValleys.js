function countingValleys(steps, path) {
  console.log('running!');
  let pathArr = path.split('');
  let valley = 0;
  let level = 0;
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === 'U') {
      level++;
    }
    if (pathArr[i] === 'D') {
      level--;
    }
    if (level === 0 && pathArr[i] === 'U') {
      valley++
    }
  }
  return (valley);
}
countingValleys(8, "DUDDUDUU")

//level: 1,0,-1,-2,-1,-2,-1,0: bc U+0 valley = 1

