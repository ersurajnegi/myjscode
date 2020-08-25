/*
    - <p>Write a function called <b>minSubArrayLen</b> which accepts two parameters - an array of positive integers and a positive integer. </p>
    - <p>This function should return the minimal length of a <b>contiguous</b> subarray of which the sum is  equal to the integer passed to the function. If there isn't one, return 0 instead.<br>Examples:</p>

*/

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    // let minLen = Infinity;
    let arr = []

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total === sum) {
            arr = nums.slice(start, end - 1);
            break;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            arr = nums.slice(start + 1, end);
            total -= nums[start];
            start++;
            end++;
        }
    }

    return arr.length ? arr : 0;
}

console.log(minSubArrayLen([1, 4, 20, 3, 10, 5], 25))
