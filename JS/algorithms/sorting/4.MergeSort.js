/*
    MERGE SORT :
        - Merge sort is a sorting technique based on divide and conquer technique.
        - It first divides the array into equal halves 
        - Then combines them in a sorted manner.


    TIME COMPLEXITY : worst-case time complexity being Ο(n log n),
                    : Space Complexity : O(n)


    EX:
,
                                    [8,3,5,4,7,6,1,2]
                                            |
                            ---------------------------------
                            |                               |
                        [8,3,5,4]                       [7,6,1,2]
                            |                               |
                       -----------                     -----------
                       |          |                    |          |           
                    [8,3]       [5,4]               [7,6]       [1,2]
                      |           |                   |           |      
                 ---------      ------             --------      -------
                 |       |      |    |             |      |      |     |
                [8]     [3]    [5]  [4]           [7]   [6]    [1]   [2]
                 |_______|      |____|             |_____|      |_____|
                      |            |                  |            |
                    [3,8]       [4,5]               [6,7]        [1,2]
                      |___________|                   |____________|
                            |                                |   
                        [3,4,5,8]                       [1,2,6,7]
                            |_______________________________|
                                            |
                                    [1,2,3,4,5,6,7,8]

*/


function mergeSort(arr) {
    //base case for recursion
    if (arr.length === 1) { return arr }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


// function for merging two sorted arrry 

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            results.push(arr2[j]);
            j++;
        }
        else {
            results.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]); i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]); j++
    }
    return results;
}


//  [8,3,5,4,7,6,1,2]

console.log(mergeSort([8,3,5,4,7,6,1,2]));