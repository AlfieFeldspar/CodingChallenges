/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a > 0) {
    return "YES";
  }
  if (a < 0) {
    throw new Error("Negative Error");
  }
  if (a === 0) {
    throw new Error("Zero Error");
  }
}

// with ternary
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else {
    throw a < 0 ? new Error("Negative Error") : new Error("Zero Error");
  }
}
