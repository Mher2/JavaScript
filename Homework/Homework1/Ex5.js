/*
* 5. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
*/

// this is wrong // we should check 4 cases nto 8!
let number = 35;
let first_number = 3;
let second_number = 5;
let third_number = 7;

if(number % first_number === 0){
    if(number % second_number === 0){
        if(number % third_number === 0){
            result = `"${number} is a multiple of ${first_number}, ${second_number} and ${third_number}"`   // 111
        }else{
            result = `"${number} is a multiple of ${first_number} and ${second_number}"`    //110
        }
    }else if(number % third_number === 0){
        result = `"${number} is a multiple of ${first_number} and ${third_number}"` //101
    }else{
        result = `"${number} is a multiple of ${first_number}"` //100
    }
}else if(number % second_number === 0){
    if(number % third_number === 0){
        result = `"${number} is a multiple of ${second_number} and ${third_number}"`    //011
    }else{
        result = `"${number} is a multiple of ${second_number}"`        //010 can be removed as there is no such condition in problem
    }
}else if(number % third_number === 0){
    result = `"${number} is a multiple of ${third_number}"`        //001 can be removed as there is no such condition in problem
}else{
    result = `"${number} is not a multiple of ${first_number}, ${second_number} and ${third_number}"`   //000
}

console.log(`result = ${result}`);
