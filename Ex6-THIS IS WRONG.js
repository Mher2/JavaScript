/*
* 6. Given an age, figure out whether someone is a baby(1 months - 12 months),
* toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or
* adult(18 years and more ). Also check that age in months is between 1 and 12.
*/

let age_number = 8;
let age_criteria = "months";

const months = "\"months\"";
const years = "\"years\"";



if (age_criteria === months) {
    if (age_number <= 12 && age_number >= 1){
        age_group = "baby";
    } else{
        age_group = `Wrong age number ${age_number} before ${months}!`;
    }
} else if(age_criteria === years){
    if (age_number >= 1 && age_number <= 2) {
        age_group = "toddler";
    } else if (age_number >= 3 && age_number <= 12) {
        age_group = "child";
    } else if (age_number >= 13 && age_number <= 17) {
        age_group = "teenager";
    } else if (age_number >= 18) {
        age_group = "adult";
    } else {
        age_group = `Wrong age number ${age_number} before ${years}`;
    }
}else{
    if(age_number < 1){
        age_group = `Wrong age criteria ${age_criteria} and age number ${age_number}`;
    }else {
        age_group = `Wrong age criteria ${age_criteria} after age number ${age_number}`;
    }
}

console.log(`age_number = ${age_number}`);
console.log(`age_criteria = ${age_criteria}`);
console.log(`age_group = ${age_group}`);
