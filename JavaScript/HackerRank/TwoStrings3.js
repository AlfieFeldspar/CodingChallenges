function twoStrings(s1, s2) {
  const s1Map = {};
  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] = true;
    // console.log(s1Map);
  }
  for (let i = 0; i < s2.length; i++) {
    if (s1Map[s2[i]]) {
      return "Yes";
    }
  }
  return "No";
}
// let results = twoStrings("hello", "world");
let results = twoStrings("hi", "world");

console.log(results)
