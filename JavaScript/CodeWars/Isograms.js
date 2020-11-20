/**An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

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
