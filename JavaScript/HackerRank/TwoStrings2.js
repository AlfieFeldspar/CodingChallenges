function commonSubstring(a, b) {
  // Write your code here
  a.sort();
  b.sort();
  const aMap = {};
  const bMap = {};
  let stringLetterA = "";
  let stringLetterB = "";
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      //grab each letter
      stringLetterA = a[i][j];
      // console.log(stringLetter);
      // create a map to compare with b
      aMap[stringLetterA] = true;
    }
  }
  // console.log(aMap) --> looks good!
  for (let k = 0; k < b.length; k++) {
    for (let l = 0; l < b[k].length; l++) {
      stringLetterB = b[k][l];
      //   console.log(stringLetterB);
      bMap[stringLetterB];
    }
  }
  aArray = Object.keys(aMap);
  bArray = Object.keys(bMap);

  const commonA = aArray.some(element => bArray.includes(element))
  if (commonA === 'true'){
      console.log("Match!")
  }
  console.log("NO");
}
