function getLetter(s) {
  switch (true) {
    case /^[aeiou]/.test(s):
      return "A";
    case /^[bcdfg]/.test(s):
      return "B";
    case /^[hjklm]/.test(s):
      return "C";
    case /^[npqrstvwxyz]/.test(s):
      return "D";
  }
}
getLetter('adfgt')