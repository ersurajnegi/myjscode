


var validMountainArray = function (A) {
    if (A.length < 3) { return false }
    let i = 0;
    let returnVal = false;
    for (i = 0; i < A.length; i++) {
        if (A[i] > A[i + 1]) {
            returnVal = false;
            break;
        } else {
            returnVal = true;
        }
    }
    console.log(i, returnVal)
    if (!returnVal) {
        for (let j = i; j < A.length; j++) {
            if (A[j] < A[j + 1]) {
                returnVal = false;
                break;
            }
            else {
                returnVal = true;
            }
        }
    }

    return returnVal;

};



console.log(validMountainArray([1, 2, 4, 3, 6, 3]));