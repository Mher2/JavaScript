/*
* X. Given a string. Check is it a Palindrom or not.
 */

// split -> string -> array
// revert -> array -> yarra
// join -> array -> string

function split(str) {
    if (typeof str !== 'string') {
        return "Wrong input, should be string";
    } else {
        let arr = [];
        let len = str.length;
        for (let i = 0; i < len; i++) {
            arr[i] = str[i]; // Corrected
            // arr.push(str[i]);
        }
        return arr;
    }
    // return []; // Corrected
}

function revert(arr) {
    // if (arr.length !== undefined && typeof arr !== 'string') {  // OR
    if (Array.isArray(arr)) {
        let revertedArr = [];
        let len = arr.length;
        for (let i = len - 1, j = 0; i >= 0; i--, j++) {
            revertedArr[j] = arr[i]; // Corrected
            // revertedArr.push(arr[i]);
        }
        return revertedArr;
    }
    return arr;
}

function join(arr) {
    // if (arr.length !== undefined && typeof arr !== 'string') {  // OR
    if (Array.isArray(arr)) {
        let str = '';
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            str += arr[i];
        }
        return str;
    }
    return '';
}

function isPalindrom(str) {
    if (typeof str !== 'string') {
        return "Wrong input, should be string.";
    }
    return join(revert(split(str))) === str;
    
    // if (typeof str !== 'string') {
    //     return "Wrong input, should be string.";
    // } else {
    //     let newStr = split(str);
    //     let newArr = revert(newStr);
    //     let palindromStr = join(newArr);
    //     // OR following
    //     // let palindromStr = join(revert(split(str)));
    //
    //     return palindromStr === str;
    // }

}

console.log(isPalindrom("abba"));
console.log(isPalindrom("abcba"));
console.log(isPalindrom("abcdba"));
console.log(isPalindrom([1, 2]));