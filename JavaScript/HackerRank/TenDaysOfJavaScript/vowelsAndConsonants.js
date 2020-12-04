/**Observe the following:
Each letter is printed on a new line.
First vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in . */

function vowelsAndConsonants(s) {
    let vowels = '';
    let cons = '';
    for (let i = 0; i<s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' ||s[i] === 'i' ||s[i] === 'o' ||s[i] === 'u' ) {
            vowels = vowels+s[i];
        } else {
            cons = cons+s[i]
        }
    }
    let sequence = vowels+cons;
    for (let i = 0; i<sequence.length; i++) {
         console.log(sequence[i]);
    }
}
vowelsAndConsonants('javascriptloops')