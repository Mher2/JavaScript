/*
* 9. Given a word and a list of possible anagrams,
*    select the correct sublist.
*/
/*
“listen”,
["enlists" "google" "inlets" "banana"]

[“inlets”]
*/

function isAnagram(word, wordToBeChecked) {
    let wordLength = word.length;
    let wordToBeCheckedLength = wordToBeChecked.length;
    if (wordLength !== wordToBeCheckedLength) {
        return false;
    }

    if(!isWordsLettersSame(word, wordToBeChecked)) {
        return false;
    }

    return true;
}

function isWordsLettersSame(word, wordToBeChecked) {
    let wordLength = word.length;
    let newWordToBeChecked = wordToBeChecked;
    let newWord = '';
    for (let i = 0; i < wordLength; i++) {
        let currentLetter = word[i];
        let isSameLetter = false;
        let newWordLength = newWordToBeChecked.length;
        for (let j = 0; j < newWordLength; j++) {
            if (currentLetter === newWordToBeChecked[j] && !isSameLetter) {
                isSameLetter = true;
            } else {
                newWord += newWordToBeChecked[j];
            }
        }
        if (isSameLetter === false) {
            return false;
        }
        newWordToBeChecked = newWord;
        newWord = '';
    }

    return true;
}

function findAnagrams(word, wordsArray) {
    let length = wordsArray.length;
    for (let i = 0; i < length; i++) {
        if(isAnagram(word, wordsArray[i])) {
            console.log(wordsArray[i]);
        }
    }
}


findAnagrams("ttztz", ["zzttz", "ttttz", "ztztt", "tztzt"]);

