/**
 The AI has now progressed to a 2D board game, still always playing 'X'. The goal is still to place an 'X' in an empty space to flip as many 'O' as possible.

Every space on the board can be empty (denoted by ' '), or can contain one 'X', 'O', or 'W' token. A 'W' token denotes a wall, and tokens may not be placed on walls.

Each 'X' token has a blast radius of r. That is, placing an 'X' token in an empty space, will flip all of the 'O' tokens that are at most r distance from the 'X' token. Walls don't affect the blast radius.

We define the distance as the Euclidean distance: 
distance((row1, col1), (row2, col2)) = sqrt((row1-row2)^2 + (col1-col2)^2)

For example, given this board and a blast radius of 1:
                      X  captures (1, 3)
                      |
board1 = [            \/
    [ ' ', ' ', ' ', ' ' ],
    [ ' ', 'W', 'O', 'O' ],
    [ ' ', 'O', ' ', 'O' ],
                 ^-------------- X captures (2, 1), (1, 2), (2, 3)
    [ 'W', ' ', ' ', 'W' ],
]
The AI has at most 2 tokens to place. Write a function that given a board and a blast radius returns a shortest list of token positions that will allow X to capture all the Os. 
If none exists, return None/null. If multiple optimal solutions exist, return any one.

Additional Test Input
board2 = [
    [ ' ', ' ', 'O', ' ' ],
    [ ' ', 'W', ' ', 'O' ],
    [ ' ', 'W', 'O', 'O' ],
    [ ' ', 'O', ' ', 'O' ],
]
 

board3 = [
    [ 'O', 'O', 'O' ],
    [ 'O', 'O', 'O' ],
    [ 'O', 'O', ' ' ]
]

board4 = [
    [ 'O', 'O', 'O' ],
    [ 'O', ' ', 'O' ],
    [ 'O', 'O', ' ' ]
]

All Test Cases (results can be in any order):
      board,  r (blast radius)
blast(board1, 1) => (0, 3), (2, 2)
blast(board2, 1) => None/null
blast(board2, 2) => (0, 3), (3, 2) or (1, 2), (3, 2)
blast(board3, 2) => None/null
blast(board3, 3) => (2, 2)
blast(board4, 3) => (1, 1) or (2, 2)

Complexity Variables:
n = number of rows in the board
m = number of columns in the board
r = blast radius
 */

board1 = [
    [ ' ', ' ', ' ', ' ' ],
    [ ' ', 'W', 'O', 'O' ],
    [ ' ', 'O', ' ', 'O' ],
    [ 'W', ' ', ' ', 'W' ],
]
function blastRadius(grid , radius){
  function explore(grid, row, column, visited) {
        const rowInbounds = 0 <= row && row < grid.length;
        const colInbounds = 0 <= column && column < grid[0].length;
        if (!rowInbounds || !colInbounds) return false;

        if (grid[row][column] === 'W') return false;
        if (grid[row][column] === 'O') return true;
        const pos = row + ',' + column;    
        if (visited.has(pos)) return false;
        visited.add(pos);

        let test = explore(grid, row, column + 1, visited) ||
          explore(grid, row, column - 1, visited) ||
          explore(grid, row - 1, column, visited) ||
          explore(grid, row + 1, column, visited);
        // visited.delete(pos);
        return test;

    }
    const visited = new Set();

    let result = new Map();
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
          if(grid[r][c] === " "){
            // 
            if(explore(grid, r, c, visited)){
              result.set(`${r},${c}`)
            }
          }
        }
    }
    return result;
}

console.log(blastRadius(board1, 1))