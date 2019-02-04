/*
* 8. Given a phone number. Clean up it, so it is valid.
     The rules are as follows:

     If the phone number is less than 10 digits assume that it is bad number
     If the phone number is 10 digits assume that it is good
     If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
     If the phone number is 11 digits and the first number is not 1, then it is a bad number
     If the phone number is more than 11 digits assume that it is a bad number.

     Ignore spaces.
 */

function removeSpaces(phoneNumber) {
    let newPhoneNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
        if (phoneNumber[i] !== " ") {
            newPhoneNumber += phoneNumber[i];
        }
    }
    return newPhoneNumber;
}

function calculateDigits(phoneNumber) {
    return phoneNumber.length;
}

function checkPhoneNumber(phoneNumber) {
    phoneNumber = removeSpaces(phoneNumber);
    if (calculateDigits(phoneNumber) === 11 && +phoneNumber[0] === 1) {
        let newPhoneNumber = '';
        for (let i = 1; i< phoneNumber.length; i++ ) {
            newPhoneNumber += phoneNumber[i];
        }
        return newPhoneNumber;
    } else if (calculateDigits(phoneNumber) === 10) {
        return phoneNumber;
    } else {
        return "Bad number";
    }
}

console.log(checkPhoneNumber('455678'));
console.log(checkPhoneNumber('339 5656888'));
console.log(checkPhoneNumber('10008989562'));
console.log(checkPhoneNumber('45231489562'));
console.log(checkPhoneNumber('1232356897452'));
