/**Complete the function in the editor below by returning a RegExp object, 're', that matches any string 's' that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.*/

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /([aeiou]).*\1/
    return re;
}

// regex surrounded by /   /
// (.) would be any first character. in this case ([aeiou]) is any vowel.
// .*  is any intervening set of characters
//  \1  a reference back to matching the first character

//returns 'false' for 'bcb'
//returns 'true' for 'asoiudfa'