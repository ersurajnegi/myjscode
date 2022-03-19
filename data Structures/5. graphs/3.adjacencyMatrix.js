/**
 ISLAND COUNT:
    Write a function, islandCount, that takes in a grid containing Ws and Ls. 
    W represents water and L represents land. 
    The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/

const islandCount = (grid) => {
    function explore(grid, row, column, visited) {
        const rowInbounds = 0 <= row && row < grid.length;
        const colInbounds = 0 <= column && column < grid[0].length;
        if (!rowInbounds || !colInbounds) return false;

        if (grid[row][column] === 'W') return false;

        const pos = row + ',' + column;
        if (visited.has(pos)) return false;
        visited.add(pos);

        explore(grid, row, column + 1, visited);
        explore(grid, row, column - 1, visited);
        explore(grid, row - 1, column, visited);
        explore(grid, row + 1, column, visited);

        return true;

    }
    const visited = new Set();

    let count = 0;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (explore(grid, r, c, visited) === true) {
                count += 1;
            }
        }
    }
    return count;
};

/**
 MINIMUM ISLAND
    Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
    W represents water and L represents land. The function should return the size of the smallest island. 
    An island is a vertically or horizontally connected region of land.

    You may assume that the grid contains at least one island.

 */

const minimumIsland = (grid) => {
    function explore(grid, row, column, visited) {
        const rowInbounds = 0 <= row && row < grid.length;
        const colInbounds = 0 <= column && column < grid[0].length;
        if (!rowInbounds || !colInbounds) return 0;

        if (grid[row][column] === 'W') return 0;

        const pos = row + ',' + column;
        if (visited.has(pos)) return 0;
        visited.add(pos);

        let size = 1;
        size += explore(grid, row - 1, column, visited);
        size += explore(grid, row + 1, column, visited);
        size += explore(grid, row, column - 1, visited);
        size += explore(grid, row, column + 1, visited);
        return size;

    }
    const visited = new Set();

    let minSize = Infinity;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            let size = explore(grid, r, c, visited);
            if (size > 0 && size < minSize) {
                minSize = size;
            }
        }
    }
    return minSize;
};
