/*
    Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written.

    Do the above modifications to the input array in place, do not return anything from your function.

    

    Example 1:
    Input: [1,0,2,3,0,4,5,0]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

*/

var duplicateZeros = function (arr) {
    let length = arr.length;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            count++;
            i++;
        }
    }
    console.log(arr);
    arr.splice(length, count)
    console.log(arr);
};
// var a = [1, 2, 3, 4]
// a.splice(1, 0, 10);
// console.log(a.slice(0, 2))
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])

