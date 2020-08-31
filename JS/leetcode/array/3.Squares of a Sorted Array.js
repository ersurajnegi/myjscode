/*
    Given an array of integers A sorted in non-decreasing order, 
    return an array of the squares of each number, also in sorted non-decreasing order.

    Example 1:

    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Example 2:

    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]


*/

var sortedSquares = function (A) {
    // A = A.map((item) => {
    //     return Math.pow(Math.abs(item), 2)
    // })
    // return A.sort((a, b) => a - b);

    const squares = [];
    A.forEach(num => squares.push(num * num));
    return squares.sort((a, b) => a - b);
};


console.log(sortedSquares([-4, -1, 0, 3, 10]))