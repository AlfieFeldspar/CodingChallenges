/**You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest. */

// first attempt failed 2 tests
function birthdayCakeCandles(candles) {
    candles.sort((a,b) => b-a)
    let count = 1;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === candles[i+1]){count++}
    }
    return count;
}

//passed all tests!
function birthdayCakeCandles(candles) {
    candles.sort((a,b) => b-a)
    let max = candles[0];
    return (candles.filter((candle) => candle===max).length)
}