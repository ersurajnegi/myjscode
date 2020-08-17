/*
    BINARY SEARCH : Only works for SORTED ARRAYS.
        - Faster form than Linear search
        - Rather than eliminating one element at a time, we can eliminate half the items at a time
        - Based on DIVIDE AND CONQUER


    TIME COMPLXITY IS - 
                -- Worst Case : O(log n);
                -- Best Case : O(1)

*/

/*
    PSUDEOCODE:
        1. create a LEFT pointer at start of the array and RIGHT pointer at end of Array
        2. while LEFT pointer comes before the RIGHT pointer , repeat following:
            - Create a pointer in the middle
            - if pointer value is EQUAL to value, return the index
            - if pointer value is LESS than value then move the LEFT pointer UP
            - if pointer value is MORE than value then move the RIGHT pointer down
        3. not FOund, return -1
*/

// function binarySearch(arr, value) {
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);
//     while (arr[middle] !== value && left <= right) {

//         if (arr[middle] > value) {
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//         middle = Math.floor((left + right) / 2);

//     }
//     if (arr[middle] === value) {
//         return arr[middle];
//     }
//     return -1;
// }

// console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20], 15));

function binarySearchRecursive(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    if (arr.length === 1 && arr[0] !== value) { return 'Not FOund' };

    if (arr[middle] === value) { return 'found'; }
    else if (arr[middle] > value) { return binarySearchRecursive(arr.slice(0, middle), value) }
    else { return binarySearchRecursive(arr.slice(middle + 1, arr.length), value); }
}

 console.log(binarySearchRecursive([1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20], 109));
