function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    //critical piece: j = i + 1
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
// let result = isIsogram("Dermatoglyphics");
let result = isIsogram("moOse")
// let result = isIsogram("asa");
console.log(result);
