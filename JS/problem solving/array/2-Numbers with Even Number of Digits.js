/*
    Given an array nums of integers, return how many of them contain an even number of digits.


Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.


*/

var findNumbers = function (nums) {
    // var count = 0;
    // nums.forEach(element => {
    //     if (element.toString().length % 2 === 0) {
    //         count++;
    //     }
    // });
    // return count;

    return nums.filter(num => num.toString().length % 2 === 0).length
    
};

var arr = [12, 345, 2, 60, 7896]

console.log(findNumbers(arr));