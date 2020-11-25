/*
    Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

    Find all the elements of [1, n] inclusive that do not appear in this array.

    Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

    Example:

    Input:
    [4,3,2,7,8,2,3,1]

    Output:
    [5,6]

*/

function test(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[i + 1] = 0
    }
    arr.forEach(element => {
        obj[element]++;
    });
    arr =Object.keys(obj).filter((key) => {
        return obj[key] === 0
    })
    return arr;
}

console.log(test([4, 3, 2, 7, 8, 2, 3, 1]))