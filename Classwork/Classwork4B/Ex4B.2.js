/*
* 2. Write a function to find the count of all vowels in a given string.
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function isVowel(char) {
    for (let i = 0; i < 10; i++) {
        if (VOWELS[i] === char) {
            return true;
        }
    }
    return false;
}

function getVowelsCount(word) {
    let len = word.length;
    let vowelsCount = 0;
    for (let i = 0; i < len; i++) {
        if (isVowel(word[i])) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(getVowelsCount("aaa666AA88A"));
console.log(getVowelsCount("5asaOIi"));

