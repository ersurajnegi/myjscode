/*
    Add 1 to last element of array
    [1,2,3]  +1 ==> 1,2,4
    999 => +1 ===> 1000
*/

function add(arr) {
    let carry = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i] + 1;
        if (arr[i] > 9) {
            arr[i] = 0;
            carry = 1;
        } else {
            carry = 0;
            break;
        }
    }

    if (carry) {
        arr.unshift(carry);
    }
    console.log(arr);
}

add([1, 2, 3]);   // => [1,2,4]
add([1, 9, 9]);   // => [2,0,0]
add([9, 9, 9]);   // => [1,0,0,0]
add([9, 4, 9]);   // => [9,5,0]