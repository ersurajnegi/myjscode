/*
    Sliding Window
        - involves creating a a window whic an be either be an array otr number from one position to another.
        - Depending on certain conditions, window either increases or decreaes
        - very useful for keeping track of a subset of data in an array/string etc/

*/

/*
/*
    functions which accepta an array of integers and a number callen n. function shud calculate the maximum summ if n conseutive elements in arrauy
    ([1,2,5,2,8,1,5] , 2) ==> 10 (2+8)
    ([1,2,5,2,8,1,5] , 4) ==> 17 (2+5+2+8)
*/

function sum(arr, n) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }
    let temp = max;

    for (let i = n; i < arr.length; i++) {
        temp = (max - arr[i - n]) + arr[i];
        max = Math.max(temp, max);
    }
    return max;
}

console.log(sum([1, 2, 5, 2, 8, 1, 5], 5));
console.log(sum([1,2,5,2,8,1,5] , 4));