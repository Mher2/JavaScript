/*
* 3. Given a string and a number. Change each letter character in a string adding that
     number to a character shiftString. Be sure to keep character between letters’ codes. Return
     new string.
 */

function shiftChar(char, number) {
    let charCode = char.charCodeAt(0);
    let numberToBeInRange = number % 26;
    let newCode = charCode + numberToBeInRange;
    // let newChar;
    if (newCode > 122) {
        newCode = 96 + newCode % 122;
    }
    let newChar = String.fromCharCode(newCode);

    // if (newCode >= 97 && newCode <= 122) {
    //     return String.fromCharCode(newCode);
    // } else {
    //     newCode %= 122;
    //     newCode += 96;
    //     // newCode = 97 + newCode % 26;
    //     return String.fromCharCode(newCode);
    // }
    return newChar;
}

function shiftString(word, number) {
    let shiftedWord = '';
    let len = word.length;
    for (let i = 0; i < len; i++) {
        shiftedWord += shiftChar(word[i], number);

        // let code = str.charCodeAt(i) + num;
        // shiftedString += strShifr(code);
    }
    return shiftedWord;
}



console.log(shiftString("xyz", 26));
console.log(shiftString("x", 1));
console.log(shiftString("x", 2));
console.log(shiftString("x", 27));
console.log(shiftString("a", 27));
console.log(shiftString("a", 2));
// console.log(shiftString("xyz", 13));
// console.log(shiftString("abc", 30));
// console.log(shiftString("abc", 13));
