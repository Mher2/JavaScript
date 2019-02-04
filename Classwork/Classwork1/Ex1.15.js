// 15.

let num = 12;
result = "no";

if(num > 9 && num < 100){
    const first_digit = (num - num % 10) / 10;
    const second_digit = num % 10;

    if(first_digit > second_digit) {
        result = "yes"
    }
}

console.log(result);
