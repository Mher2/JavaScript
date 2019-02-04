/*
* 8. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.
*/

let num = 1560048000;
let indicator = false;

while (num !== 0) {
    let lastDigit1 = num % 10;
    num = (num - lastDigit1) /10;
    let lastDigit2 = num % 10;
    let lastDigit3 = ((num - lastDigit2) /10) % 10;
    if (lastDigit1 === 0 && lastDigit2 === 0 && lastDigit3 === 0) {
        console.log("yes");
        indicator = true;
        break;
    }
}

if (!indicator) {
    console.log('no')
}


// OR great solution
// number@ / um enq 1000-i u ete bajanvec
