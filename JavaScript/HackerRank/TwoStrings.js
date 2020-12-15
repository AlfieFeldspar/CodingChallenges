function commonSubstring(a, b) {
  // Write your code here
  const aMap = {};

  for (let i = 0; i < a.length; i++) {
    //grab each letter
    stringLetterA = a[i][j];
    // console.log(stringLetter);
    // create a map to compare with b
    aMap[stringLetterA] = true;
  }

  // console.log(aMap)

  for (let k = 0; k < b.length; k++) {
    for (let l = 0; l < b[k].length; l++) {
      stringLetterB = b[k][l];
      //   console.log(stringLetterB);
      //check is b\'s letters are in aMap
      if (aMap[stringLetterB]) {
        //for some reason this return is not producing output; trying counter
        // return 'YES';
        counter++;
      }
    }
  }
  //console.log(counter)
  if (counter > 0) {
    console.log("YES");
    counter = 0;
  }
  //again, return statement is not producing output.
  //   return 'NO';
  console.log("NO");
}
commonSubstring(["hello", "hi"], ["world", "bye"]);

function commonSubstring(a, b) {
  // Comparing hash maps seemed to time out
  const aMap = {};
  const bMap = {};
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      //grab each letter
      // console.log(stringLetter);
      // create a map to compare with b
      aMap[a[i][j]] = true;
    }
  }
  for (let k = 0; k < b.length; k++) {
    for (let l = 0; l < b[k].length; l++) {
      //   console.log(stringLetterB);
      bMap[b[k][l]] = true;
      // console.log(bMap);
      //check is b\'s letters are in aMap
      //   if (aMap[stringLetterB]) {
      //       //for some reason this return is not producing output; trying counter
      //         // return 'YES';
      //         counter++;
      //     }
    }
  }
  let ArrayA = Object.keys(aMap);
  // console.log(ArrayA)
  let ArrayB = Object.keys(bMap);
  // console.log(ArrayB)
  for (let m = 0; m < ArrayA.length; m++) {
    for (let n = 0; n < ArrayB.length; n++) {
      // console.log(ArrayA[m], ArrayB[n])
      if (ArrayA[m] === ArrayB[n]) {
        return console.log("YES");
      }
    }
  }

  //console.log(counter)
  // if (counter>0){
  //     console.log("YES");
  //     counter = 0;
  // }
  //again, return statement is not producing output.
  return console.log("NO");
}
