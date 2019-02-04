/*
*  6. Determine if a word or phrase is an isogram.
*     An isogram (also known as a "non pattern word") is a word
*     or phrase without a repeating letter.
*/

function shallowCompare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function isAnIsogram(str) {
    let len = str.length;
    for(let i = 0; i < len-1; i++) {
        for(let j = i+1; j < len; j++) {
            if (typeof str[i] === "object" && typeof str[j] === "object") {
                if (shallowCompare(str[i], str[j])) {
                    return false;
                }
            } else {
                if (str[i] === str[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}


console.log(isAnIsogram("123456"));
console.log(isAnIsogram("gcnbffhtjrfhy"));
console.log(isAnIsogram("qwertyuiop[]';lkjhgfdsazxcvbnm,./-0987654321`"));