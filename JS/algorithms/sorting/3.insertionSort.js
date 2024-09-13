/*
    SORTING : process of rearranging the items in a collection in some kind of order

*/

/*
    INSERTION SORT:  Swap actions is less than Bubble Sort
        - a sub-list is maintained which is always sorted
        -  An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. 


    TIME COMPLEXITY - worst case complexity are of Ο(n*n)

    PSUEDOCODE:
        Step 1 − If it is the first element, it is already sorted. return 1;
        Step 2 − Pick next element
        Step 3 − Compare with all elements in the sorted sub-list
        Step 4 − Shift all the elements in the sorted sub-list that is greater than the 
                value to be sorted
        Step 5 − Insert the value
        Step 6 − Repeat until list is sorted

    
*/
function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        //save the current value needs to be shifted
        currentVal = arr[i];
        //start loop from (i - 1) and check if value is greater than current value
        // if arr[j]  > current ,  put value of arr[j] into arr[j+1]
        // else break loop and put currentvlae in arr[j+1]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));