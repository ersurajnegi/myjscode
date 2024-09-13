/*
    Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.

    eg:
        - sameFrequency(182,281) => true
        - sameFrequency(34,14) => false
        - sameFrequency(3589578, 5879385) => true
*/

function sameFrequency(num1, num2) {
    let str1 = num1.toString().split('');
    let str2 = num2.toString().split('');

    if (str1.length !== str2.length) { return false }

    let lookup1 = {};
    let lookup2 = {};

    str1.forEach(element => {
        lookup1[element] = (lookup1[element] || 0) + 1;
    });

    str2.forEach(element => {
        lookup2[element] = (lookup2[element] || 0) + 1;
    });

    for (let key in lookup1) {
        if (!(key in lookup2)) { return false; }
        if (lookup1[key] !== lookup2[key]) { return false }
    }
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));