/*
    Count Unique Values
     - functions whic accepts a sorted array and counts the unique value in array.
    - there can be negative numbers in the array but it will always be sorted.
    [1,1,1,1,2] ===> 2
    [-2,-1,-1,0,11]
*/

function countUniqueValueNaive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            if (arr[i] !== arr[i - 1]) {
                count++;
            }
        } else {
            count++;
        }
    }
    return count;
}

console.log(countUniqueValueNaive([1, 1, 1, 1, 2]));
console.log(countUniqueValueNaive([-2, -1, -1, 0, 11]));
console.log(countUniqueValueNaive([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));


function countUniqueValue(arr) {
    let start = 0;
    let end = 1;
    let count = 1;
    if (arr.length === 0) { return 0; }
    while (end < arr.length) {
        if (arr[start] != arr[end]) {
            count++;
        }
        start += 1;
        end += 1;
    }
    return count;
}

console.log(countUniqueValue([]));
console.log(countUniqueValue([1, 1, 1, 1, 2]));
console.log(countUniqueValue([-2, -1, -1, 0, 11]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));