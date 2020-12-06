/**Complete the function in the editor below by returning a RegExp object, 're', that matches any string 's' that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.*/

function regexVar(str) {
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
        // \2 looks for matched item stored 2 instances ago 
        // \3 looks for matched item stored 3 ago, etc
    
    //  $ ensures that matched item is at end of the sequence
    
        let re = /^([aeiou]).+\1$/;
        return re;
    }

// regex surrounded by /   /
// (.) would be any first character. in this case ([aeiou]) is any vowel.
// .*  is any intervening set of characters
//  \1  a reference back to matching the first character

//returns 'false' for 'bcb'
//returns 'true' for 'asoiudfa'

regexVar('aewxyzae')