/*
    Part 2

As you are reading the book multiple times, you notice that you always get bad endings. 
You start to suspect there is no way to get to the good endings, so you decide to find out.

Good and bad endings will be separate lists of page numbers, like this:

good_endings = [10, 15, 25, 34]
bad_endings = [21, 30, 40]

Given lists of good endings, bad endings, and a list of the choices along with their options, 
return a collection of all the reachable good endings, if any.

Examples:

choices1 = [[3, 16, 24]]
find_good_endings(good_endings, bad_endings, choices1)
  Start: 1 -> 2 -> 3(choice) -> 16 -> 17... -> 21(bad ending)
                   |
                   -> 24 -> 25(good ending)
Thus it is possible to reach the good ending at 25 but no others, so we return [25].

choices2 = [[3, 16, 20]]
find_good_endings(good_endings, bad_endings, choices2)
  Start: 1 -> 2 -> 3(choice) -> 16 -> 17... -> 21(bad ending)
                   |
                   > 20 -> 21(bad ending)
No good ending is reachable, so return [].

Additional Inputs:
choices3 = [[3, 2, 19], [20, 21, 34]]
choices4 = []
choices5 = [[9, 16, 26], [14, 16, 13], [27, 29, 28], [28, 15, 34], [29, 30, 38]]
choices6 = [[9, 16, 26], [13, 31, 14], [14, 16, 13], [27, 12, 24], [32, 34, 15]]
choices7 = [[3, 9, 10]]

Complexity Variable:
n = number of pages
(endings and choices are bound by the number of pages)

All Test Cases - snake_case:
find_good_endings(good_endings, bad_endings, choices1) => [25]
find_good_endings(good_endings, bad_endings, choices2) => []
find_good_endings(good_endings, bad_endings, choices3) => [34]
find_good_endings(good_endings, bad_endings, choices4) => [10]
find_good_endings(good_endings, bad_endings, choices5) => [15, 34]
find_good_endings(good_endings, bad_endings, choices6) => [15, 25, 34]
find_good_endings(good_endings, bad_endings, choices7) => [10]

All Test Cases - camelCase:
findGoodEndings(goodEndings, badEndings, choices1) => [25]
findGoodEndings(goodEndings, badEndings, choices2) => []
findGoodEndings(goodEndings, badEndings, choices3) => [34]
findGoodEndings(goodEndings, badEndings, choices4) => [10]
findGoodEndings(goodEndings, badEndings, choices5) => [15, 34]
findGoodEndings(goodEndings, badEndings, choices6) => [15, 25, 34]
findGoodEndings(goodEndings, badEndings, choices7) => [10]
*/

function findGoodEndings(goodEndings, badEndings, choices) {
    let goodEndingsMap = new Map();
    let badEndingsMap = new Map();
    let choicesMap = new Map();

    for (let ending of goodEndings) {
        goodEndingsMap.set(ending);
    }
    for (let ending of badEndings) {
        badEndingsMap.set(ending);
    }
    for (let choice of choices) {
        let [key, option1, option2] = choice;
        choicesMap.set(key, { option1, option2 });
    }
    // console.log(choicesMap);

    let result = [];
    let visited = new Map()
    for (let i = 1; i < 100; i++) {
        if (choicesMap.has(i)) {
            let choice = choicesMap.get(i)
            // console.log(choicesMap.get(i));
            function traverse(j) {
                while (j < 100) {
                    if (visited.has(j) || badEndingsMap.has(j)) {
                        break;
                    }
                    if (goodEndingsMap.has(j)) {
                        result.push(j);
                        break;
                    }
                    visited.set(j);
                    j++
                }
            }
            traverse(choice.option1);
            // console.log("after choice 1 : ", i , result)
            traverse(choice.option2);
        }
    }
    // console.log(result)
    return new Set(result)
    // return result;
}

good_endings = [10, 15, 25, 34]
bad_endings = [21, 30, 40]
choices1 = [[3, 16, 24]]
choices2 = [[3, 16, 20]]
choices3 = [[3, 2, 19], [20, 21, 34]]
choices4 = []
choices5 = [[9, 16, 26], [14, 16, 13], [27, 29, 28], [28, 15, 34], [29, 30, 38]]
choices6 = [[9, 16, 26], [13, 31, 14], [14, 16, 13], [27, 12, 24], [32, 34, 15]]
choices7 = [[3, 9, 10]]

console.log(findGoodEndings(good_endings, bad_endings, choices1), "=> [25]")
// console.log(findGoodEndings(good_endings, bad_endings, choices2), "=> []")

console.log(findGoodEndings(good_endings, bad_endings, choices3), "=> [34]")
console.log(findGoodEndings(good_endings, bad_endings, choices4), "=> [10]")

// console.log(findGoodEndings(good_endings, bad_endings, choices5), "=> [15, 34]")
// console.log(findGoodEndings(good_endings, bad_endings, choices6), "=> [15, 25, 34]")
// console.log(findGoodEndings(good_endings, bad_endings, choices7), "=> [10]") 