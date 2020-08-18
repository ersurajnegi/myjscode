/*
    SORTING : process of rearranging the items in a collection in some kind of order

*/

/*
    SELECTION SORT:  Swap actions is less than Bubble Sort
        - Selection sort is a simple sorting algorithm. 
        - This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, 
            the sorted part at the left end and the unsorted part at the right end. 
        - Initially, the sorted part is empty and the unsorted part is the entire list.

        - The smallest element is selected from the unsorted array and swapped with the leftmost element, 
            and that element becomes a part of the sorted array. 
        - This process continues moving unsorted array boundary by one element to the right.

    TIME COMPLEXITY - worst case complexity are of Ο(n*n)

    PSUEDOCODE:
        Step 1 − Set MIN to location 0
        Step 2 − Search the minimum element in the list
        Step 3 − Swap with value at location MIN
        Step 4 − Increment MIN to point to next element
        Step 5 − Repeat until list is sorted

    
*/

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([51, 12, 34, 110, 11, 90, 123]));