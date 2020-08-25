
/*
    Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

    After doing so, return the array.
    Example 1:

    Input: arr = [17,18,5,4,6,1]
    Output: [18,6,6,6,1,-1]

    Hint #1  
        Loop through the array starting from the end.
    Hint #2  
        Keep the maximum value seen so far.
*/

var replaceElements = function (arr) {
    var max = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentItem = arr[i];
        if (i === arr.length - 1) {
            arr[i] = -1;
        }
        else {
            arr[i] = max;
        }
        max = Math.max(max, currentItem);
    }
    console.log(max)
    console.log(arr)
};

replaceElements([17, 18, 5, 4, 6, 1]);