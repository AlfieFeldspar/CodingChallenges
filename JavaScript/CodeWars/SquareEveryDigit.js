/**square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num) {
    let numString = num.toString();
    let squaredString = '';
    for (i = 0; i < numString.length; i++) {
        let squared = Math.pow(numString(i), 2);
        squaredString =+ squared;
    }
    return num = parseInt(squaredString);
}