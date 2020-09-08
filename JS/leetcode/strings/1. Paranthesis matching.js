/*
Validate if a string is a balanced string or not.
Conditions for the string to be balanced.
1. Each opening bracket should have a corresponding closing bracket.
2. The order of the bracket must be maintained
*/

var str1 = "[]{}]"; // not valid
var str2 = '[(){}]'; // valid
var str3 = ')('; // not valid
var str4 = "()" // valid


function test(str) {
    let leftside = ['[', '(', '{'];
    let map = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {

        if (leftside.includes(str[i])) {
            stack.push(str[i]);
        } else {
            let pop = stack.pop();
            if (str[i] !== map[pop]) { return false; }
        }
    }
    return true;
}

console.log(test(str1));
console.log(test(str2));
console.log(test(str3));
console.log(test(str4));