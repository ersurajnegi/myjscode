/*
    Multiple Pointers

    - crteating poiners or values that correspond to an indes or position ands move towards thte beginnig, end or middle based on certain conditions
    - very efficient for solving problems with minimum space complexoity
*/

/* 
    Example: function that accepts a sorted array of integers.  
            -- function shud find the first pair where the SUM is 0. else return undefined
    sumZero([-3,-2,-1,0,1,2,3])  // [-3,3]       
    sumZero([-3,-2,-1,0,10])  // undefined    
*/

function sumZero(arr) {
    let left = 0; right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
    return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-3,-2,-1,0,10]))