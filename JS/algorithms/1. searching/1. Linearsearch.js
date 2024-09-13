/*
    Linear search is a very simple search algorithm. 
     - In this type of search, a sequential search is made over all items one by one. 
     - Every item is checked and if a match is found then that particular item is returned, 
     - otherwise the search continues till the end of the data collection.


     TIME Complexity -- O(n);
*/


function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1;
}

console.log(linearSearch([100,23,54,676,343,34], 343)) 