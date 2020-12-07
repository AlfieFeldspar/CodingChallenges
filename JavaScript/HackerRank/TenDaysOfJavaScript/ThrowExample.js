/*
 * This function returns the value at index pos (i.e., arr[pos]).
 * 
 * If the index 'pos' is outside of the bounds of the array (i.e., value of arr[pos] is 'undefined'), throw errors.
 */
function getValue(arr, pos) {
    if (pos < 0) {
        throw new Error("Index Underflow: " + pos);
    }

    let len = arr.length;

    if (pos >= len) {
        throw new Error("Index Overflow: " + pos);
    }

    return arr[pos];
}

function main() {
    var index;  
    const arr = [1, 2, 3, 4, 5];
    try {
        index = 5;
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }

    try {
        index = 2;
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }

    try {
        index = -3;
        console.log(getValue(arr, index));
    } 
    catch (e) {
        console.log(e.message);
    }
}
main();