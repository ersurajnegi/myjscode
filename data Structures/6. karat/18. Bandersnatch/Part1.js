/*
    You are reading a Build Your Own Story book. It is like a normal book except that choices on some pages affect the story, 
    sending you to one of two options for your next page.

These choices are really stressing you out, so you decide that you'll either always pick the first option, or always pick the second option.

You start reading at page 1 and read forward one page at a time unless you reach a choice or an ending.

The choices are provided in a list, sorted by the page containing the choice, and each choice has two options of pages to go to next. 
In this example, you are on page 3, where there is a choice. Option 1 goes to page 14 and Option 2 goes to page 2.

choices1 = [[3, 14, 2]] => [current_page, option_1, option_2]
The ending pages are also given in a sorted list:

endings = [6, 15, 21, 30]

Given a list of endings, a list of choices with their options, and the choice you will always take (Option 1 or Option 2), 
return the ending you will reach. If you get stuck in a loop, return -1.

Example:
find_ending(endings, choices1, 1) (always Option 1)
  Start: 1 -> 2 -> 3(choice) -> 14 -> 15(end) => Return 15

find_ending(endings, choices1, 2) (always Option 2)
  Start: 1 -> 2 -> 3(choice) -> 2 -> 3(choice) -> 2... => Return -1

  */

function findEnding(endings, choices, option) {
    let endingsMap = new Map();
    for (let ending of endings) {
        endingsMap.set(ending, ending);
    }
    let choicesMap = new Map();
    for (let choice of choices) {
        choicesMap.set(choice[0], choice[`${option}`]);
    }
    let length = endings[endings.length - 1]
    let visited = new Map();
    let returnVal = -1;
    let i = 1;
    while (i <= length) {
        if (endingsMap.has(i)) {
            returnVal = i;
            break;
        }
        if (visited.has(i)) {
            break;
        }
        visited.set(i, true);
        if (choicesMap.get(i)) {
            i = choicesMap.get(i);
            continue;
        }
        i++
    }
    return returnVal;
}
endings = [6, 15, 21, 30];
choices1 = [[3, 14, 2]] // => [current_page, option_1, option_2]
choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]]
choices3 = []
choices4 = [[2, 10, 15], [3, 4, 10], [4, 3, 15], [10, 3, 15]]

console.log(findEnding(endings, choices2, 2), "=> 30")
console.log(findEnding(endings, choices1, 1), "=> 15")
console.log(findEnding(endings, choices1, 2), "=> -1")
console.log(findEnding(endings, choices2, 1), "=> 21")
console.log(findEnding(endings, choices3, 1), "=> 6")
console.log(findEnding(endings, choices3, 2), "=> 6")
console.log(findEnding(endings, choices4, 1), "=> -1")
console.log(findEnding(endings, choices4, 2), "=> 15")


