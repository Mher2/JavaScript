// 10.

let num1 = -4;
let num2 = 6;
let num3 = 0;

// result1 = (num1 > num2);        // true, false
// true result1
// result2 = (num1 > num3);        // true, false
// true result2
// print num1 is max
// false result2
// print num3 is max


// false result1
// result3 = (num2 > num3);        // true, false
// true result3
// print num2 is max
// false result3
// print num3 is max

if(num1 > num2){
    if(num1 > num3){
        max = num1
    }else{          // This can be removed!
        max = num3
    }
}else if(num2 > num3){
    max = num2
    }else{
    max = num3
}

console.log(`${max} is maximum`);
