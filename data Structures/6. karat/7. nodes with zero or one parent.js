/**
 * 
 Parent Child pairs. Find individuals with zero parents and exactly one parent.

 */
function getSolution(arr) {
    let map = new Map();

    for (let [parentItem, childItem] of arr) {
        if (map.has(parentItem)) {
            map.get(parentItem).childrenList.push(childItem);
        } else {
            map.set(parentItem, {
                parentsList: [],
                childrenList: [childItem],
            });
        }

        if (map.has(childItem)) {
            map.get(childItem).parentsList.push(parentItem);
        } else {
            map.set(childItem, {
                parentsList: [parentItem],
                childrenList: [],
            });
        }
    }
    let result = [[], []];
    for (let [key, info] of map) {
        if (info.parentsList.length == 0) {
            result[0].push(key);
        } else if (info.parentsList.length == 1) {
            result[1].push(key);
        }
    }
    return result;
}
// 1   2   4
//  \ /   / \
//   3   5   8
//    \ / \   \
//     6   7   9

let parentChildPairs = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
];
console.log(getSolution(parentChildPairs));



/**
 * 
 QUESTION 2: Common ancestor for two nodes
 */

function hasCommonAncestor(edges, x, y) {
    if (!edges || edges.length === 0) {
        return false;
    }
    //to get all direct parents
    const map = new Map();
    for (let [parentItem, childItem] of edges) {
        if (map.has(childItem)) {
            map.get(childItem).parentsList.push(parentItem);
        } else {
            map.set(childItem, {
                parentsList: [parentItem],
                childrenList: [],
            });
        }
    }
    //find all parents of a node
    const findAllParents = (e) => {
        const result = new Set();
        const stack = [];
        stack.push(e);
        while (stack.length !== 0) {
            const curr = stack.pop();
            const parents = map.get(curr) ? map.get(curr).parentsList : "";
            if (!parents) {
                continue;
            }
            for (const parent of parents) {
                if (result.has(parent)) {
                    continue;
                }
                result.add(parent);
                stack.push(parent);
            }
        }
        return result;
    };
    const parentsOfX = findAllParents(x);
    const parentsOfY = findAllParents(y);
    for (const parentOfX of parentsOfX) {
        if (parentsOfY.has(parentOfX)) {
            return true;
        }
    }
    return false;
}
// 1   2   4
//  \ /   / \
//   3   5   8
//    \ / \   \
//     6   7   9

let parentChildPairs = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
];
console.log(hasCommonAncestor(parentChildPairs, 3, 9));
console.log(hasCommonAncestor(parentChildPairs, 3, 5));
console.log(hasCommonAncestor(parentChildPairs, 6, 9));
console.log(hasCommonAncestor(parentChildPairs, 6, 7));
console.log(hasCommonAncestor(parentChildPairs, 3, 8));
