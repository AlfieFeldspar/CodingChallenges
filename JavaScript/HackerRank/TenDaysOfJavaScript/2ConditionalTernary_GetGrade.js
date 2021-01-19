function getGrade(score) {
  let grade = "";
  score <= 5
    ? (grade = "F")
    : score > 5 && score <= 10
    ? (grade = "E")
    : score > 10 && score <= 15
    ? (grade = "D")
    : score > 15 && score <= 20
    ? (grade = "C")
    : score > 20 && score <= 25
    ? (grade = "B")
    : (grade = "A");
  return grade;
}
getGrade(11);