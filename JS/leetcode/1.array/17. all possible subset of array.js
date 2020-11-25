
// [1,2,3] -- input

// [].[1],[2],[3],[1,2].[1,3],[2,3],[1,2,3].... -- output

function test(arr) {
    let results = [[]];
    for (let i = 0; i < arr.length; i++) {
        const length = results.length - 1;
        for (let j = 0; j <= length; j++) {
            results.push([...results[j], arr[i]]);
        }

    }
    return results
}


console.log(test([1, 2, 3, 4]))