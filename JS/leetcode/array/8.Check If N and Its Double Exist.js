/*
    Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

    More formally check if there exists two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]


    Example 1:

    Input: arr = [10,2,5,3]
    Output: true
    Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const map = {};

    for (const n of arr) {
        if (map[n * 2] || map[n / 2]) return true; // check if have *2, /2
        map[n] = true; // flag it
    }

    return false;
};

console.log(checkIfExist([10, 2, 5, 3]))