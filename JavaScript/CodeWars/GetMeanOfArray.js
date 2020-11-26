function getAverage(marks) {
    return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
  }
let results = getAverage([2, 2, 2, 2]);
console.log(results);
