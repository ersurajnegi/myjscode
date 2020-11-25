/*
    Students are asked to stand in non-decreasing order of heights for an annual photo.

    Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

    Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.


    Example 1:

    Input: heights = [1,1,4,2,1,3]
    Output: 3
    Explanation: 
    Current array : [1,1,4,2,1,3]
    Target array  : [1,1,1,2,3,4]
    On index 2 (0-based) we have 4 vs 1 so we have to move this student.
    On index 4 (0-based) we have 1 vs 3 so we have to move this student.
    On index 5 (0-based) we have 3 vs 4 so we have to move this student.


*/

//HInt : Build the correct order of heights by sorting another array, then compare the two arrays.

function height(a) {
    let sorted = [...a];
    sorted.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== sorted[i])
            count++;
    }
    return count;
}


//console.log(height([1, 1, 4, 2, 1, 3]))





var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);
    if (nums[2]) {
        if (nums[2] === nums[1]) {
            return nums[0]
        }
        return nums[2]
    }
    return nums[1] || nums[0]
};


console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))