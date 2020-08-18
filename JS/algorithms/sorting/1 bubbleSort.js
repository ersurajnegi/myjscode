/*
    SORTING : process of rearranging the items in a collection in some kind of order

*/

/*
    BUBBLE SORT: -- This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. 

    TIME COMPLEXITY - worst case complexity are of Ο(n*n)

    PSUEDOCODE:
        - Start Loop from with a variable called 'i' from end of the array towards the beginning
            -- start and inner loop with a variable called 'j' from the beggining till 'i -1'
                --- if arr[j] is greater than arr[j+1], swap both
        - return sorted array

    
*/

function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([51, 12, 34, 110, 11, 90, 123]));