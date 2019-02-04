/*
* 3. Given a word and a list of possible anagrams, select the correct sublist.
*    "listen", ["enlists" "google" "inlets" "banana"] -> ["inlets"]
*/

function  selectAnagraam(str, list) {
    return list.filter(value => value.split('').sort().join('') === str.split('').sort().join(''))
}

console.log(selectAnagraam("listen", ["enlists", "google", "inlets", "banana"]));