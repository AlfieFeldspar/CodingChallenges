function squareDigits(num) {
    let numString = num.toString();
    let squaredString = '';
    for (i = 0; i < numString.length; i++) {
        let squared = Math.pow(numString(i), 2);
        squaredString =+ squared;
    }
    return num = parseInt(squaredString);
}