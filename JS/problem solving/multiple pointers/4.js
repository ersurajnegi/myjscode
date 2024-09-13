/*
    <p>Write a function called <b>averagePair.</b> 
        - Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
        - There may be more than one pair that matches the average target.</p>

        eg: averagePair([1,2,3],2.5) ==> true
            averagePair([1,3,3,5,6,7,10,12,19],8) => true
            averagePair([],2.5) => false
            averagePair([1,2],2.5) => false
*/

function averagePair(arr, avg) {
    if (arr.length === 0) { return false }

    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let tempAvg = (arr[i] + arr[j]) / 2;
        if (tempAvg == avg) {
            return true;
        } else if (tempAvg > avg) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([], 2.5));
console.log(averagePair([1, 2], 2.5));