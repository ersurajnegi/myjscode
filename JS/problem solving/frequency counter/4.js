/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    andchecks whether there are any duplicates among the arguments passed in.
    You can solve this using the frequency counter pattern OR the multiple pointers pattern.

*/

function areThereDuplicates() {
    let countObj = {};
    for (let i = 0; i < arguments.length; i++) {
        if (countObj[arguments[i]]) { return true }
        countObj[arguments[i]] = 1;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));