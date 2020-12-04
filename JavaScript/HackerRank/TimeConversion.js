/**Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
Example
(INPUT and OUTPUT strings)
s= '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.
*/

// First try passes slowly
function timeConversion(s) {
  //return the easy AMs
  if (s[s.length - 2] === "A" && s[0] === "0") {
    return s.slice(0, -2);
  }
  if (s[s.length - 2] === "A" && s[1] === "2") {
    let sliced = s.slice(0, -2);
    //replaces only 1st instance
    return sliced.replace("12", "00");
  }
  if (s[s.length - 2] === "P" && s[0] === "1" && s[1] === "2") {
    return s.slice(0, -2);
  } else {
      // written out to understand each step
    let slicedFrontAndBack = s.slice(2, -2);
    let slicedFront = s.slice(0, 2);
    let frontStringToNum = parseInt(slicedFront);
    let plus12 = frontStringToNum + 12;
    let newStringDigits = plus12.toString();
    return newStringDigits + slicedFrontAndBack;
  }
}
timeConversion("07:05:45PM");

// optimized
function timeConversion(s) {
    //return the easy AMs
    if (s[s.length-2] === 'A' && s[0] === '0'){return s.slice(0,-2);}
    if (s[s.length-2] === 'A' && s[1] === '2'){let sliced = s.slice(0,-2); 
    //replaces only 1st instance 
    return sliced.replace('12','00');}
    if (s[s.length-2] === 'P' && s[0] === '1' && s[1] === '2') {return s.slice(0,-2);}
    else  {
        let slicedFrontAndBack = s.slice(2,-2);
        let newStringDigits = (parseInt(s.slice(0,2)) + 12).toString();
        return newStringDigits+slicedFrontAndBack;
    }
}

timeConversion("07:05:45PM");
