const arrayToObj = (array) => {
  //For some reason, playing with array sorting
  // array.sort().reverse()
  let tally = {};
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    tally[a] = (tally[a] || 0) + 1;
  }
  console.log(tally)
};
arrayToObj(["a", "a", "a", "c", "c", "b", "a", "d", "d", "c", "f", "f", "g"]);
