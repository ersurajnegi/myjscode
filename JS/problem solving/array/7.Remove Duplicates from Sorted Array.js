/*
    Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:

    Given nums = [1,1,2],

    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

    It doesn't matter what you leave beyond the returned length.


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // return new Set(nums).size;
    /*
        arr = arr.filter (function (value, index, array) { 
            return array.indexOf (value) == index;
        });
    */
    // we want to do it in place
    

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            i--;
        }
    }
    console.log(nums);
    return nums.length
};


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5,5,5,5,5,8,8,8,9,9]))