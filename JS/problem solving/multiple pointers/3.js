/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    andchecks whether there are any duplicates among the arguments passed in.
    You can solve this using the frequency counter pattern OR the multiple pointers pattern.

*/

function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    let left = 0;
    let right = 1;
    let returnval = false;
    while (right < args.length) {
        if (args[left] === args[right]) {
            return true;
        }
        else {
            right++;
            left++;
        }
    }
    return returnval;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));