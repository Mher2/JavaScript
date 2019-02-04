/*
* 9. Given a word and a list of possible anagrams,
*    select the correct sublist.
*/

function isAnagram(mainStr, subStr) {
    if (mainStr.length !== subStr.length) {
        return false;
    } else {
        for (let i = 0; i < mainStr.length; i++) {
            let currentSymbol = mainStr[i];
            let newStr = removeChar(subStr, currentSymbol);
            if (newStr === subStr) {
                return newStr === '';
            }
            subStr = newStr;
        }
        return true;
    }
}

function removeChar(str, char) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== char) {
            newStr += str[i]
        }
    }
    return newStr; // === str ? false : newStr
}

function getAnagrams(str, list) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
        if (isAnagram(str, list[i])){
            res.push(list[i])
        }
    }
    return res;
}

console.log(getAnagrams("listen", ["enlists", "google", "inlets", "banana"]));
console.log(getAnagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]));
