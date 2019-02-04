/*
* 9. Given a word and a list of possible anagrams,
*    select the correct sublist.
*/

function anagrams(word, list) {
    let res = "";
    let sortWord = word.split('').sort().join('');
    for (let i = 0; i < list.length; i++) {
        if (sortWord === list[i].split('').sort().join('')) {
            res += `${list[i]} `;
        }
    }
    return res;
}

console.log(anagrams("listen", ["enlists", "google", "inlets", "banana"]));
console.log(anagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]));
console.log(anagrams('ttztz', ['ztttz', 'zztzz']));