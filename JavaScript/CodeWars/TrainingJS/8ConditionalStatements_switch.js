/** Complete function howManydays, function accepts 1 parameter: month (numerical). Return a number of days in this month (month is always greater than 0, less than or equal to 12).*/

function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    //these can live on one line too
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
  //alternative to using default case
  //return days = 31;
}

let results = howManydays(9);
console.log(results);
