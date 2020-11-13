/*
    Freeuqnecy Counter:
        - patterns uses object or sets to collect values of value
        - Often avoid the need for nested loops with arrays/strings

*/

/*
    compare two arrays wiht the frequecy of number from 1 array with squared of that number in another array should be same
    weg: [1,2,3] & [1,9,4] === true
        [1,2,3] & [4,9,5] === false
*/

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) { return false };

    let arr1Object = {}, arr2Object = {};
    arr1.forEach(element => {
        arr1Object[element] = (arr1Object[element] || 0) + 1;

    });

    arr2.forEach(element => {
        arr2Object[element] = (arr2Object[element] || 0) + 1;
    });

    for (let key in arr1Object) {
        if (!(key * key in arr2Object)) { return false; }
        if (arr1Object[key] !== arr2Object[key * key]) { return false }
    }
    return true;
}


console.log(same([1, 2, 3], [1, 4, 9]));