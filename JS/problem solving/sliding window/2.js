/*
    <p>Given an array of integers and a number, write a function called <b>maxSubarraySum</b>, 
    which finds the maximum sum of a subarray with the length of the number passed to the function. </p>
*/

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let sum = 0;

    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    let temp = sum;
    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num] ;
        sum = Math.max(temp, sum);
    }
    return sum
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))