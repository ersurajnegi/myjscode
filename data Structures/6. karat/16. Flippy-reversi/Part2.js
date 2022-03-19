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


function blast(board, radius) {
  let zeros = [],
    spaces = [];

  function distsq(p1, p2) {
    let [p1a, p1b] = p1.split(",")
    let [p2a, p2b] = p2.split(",")
    return (p1a - p2a) ** 2 + (p1b - p2b) ** 2
  }

  function findZerosInRange(spaces, os, r) {
    let zerosInRange = {}
    for (let s of spaces) {
      zerosInRange[s] = [];
      for (let o of os) {
        if (distsq(s, o) <= r ** 2)
          zerosInRange[s].push(o);
      }

    }
    return zerosInRange
  }
  //counting all the zeros and spaces in the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'O') {
        zeros.push(`${i},${j}`)
      }
      if (board[i][j] == ' ') {
        spaces.push(`${i},${j}`)
      }
    }
  }
  // creating a Map for each coordinates in spaces to find all zeros in range oi radius blast
  let zerosInRange = findZerosInRange(spaces, zeros, radius);

  //if anything in spaces mathces zeros length, that means all zeros are covered and return early
  for (let s of spaces) {
    if (zerosInRange[s].length === zeros.length) {
      return [s]
    }
  }
  console.log(spaces);
  for (let s1 of spaces) {
    os1 = zerosInRange[s1];
    for (let s2 of spaces) {
      os2 = zerosInRange[s2];
      let covered = new Set(os1.concat(os2));
      if (covered.size === zeros.length) {
        return [s1, s2]
      }
    }
  }

  return "None"
}




board1 = [
  [' ', ' ', ' ', ' '],
  [' ', 'W', 'O', 'O'],
  [' ', 'O', ' ', 'O'],
  ['W', ' ', ' ', 'W'],
]
board2 = [
  [' ', ' ', 'O', ' '],
  [' ', 'W', ' ', 'O'],
  [' ', 'W', 'O', 'O'],
  [' ', 'O', ' ', 'O'],
]


board3 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', ' ']
]

board4 = [
  ['O', 'O', 'O'],
  ['O', ' ', 'O'],
  ['O', 'O', ' ']
]
console.log(blast(board1, 1)) //=> (0, 3), (2, 2)
// console.log(blast(board2, 1)) //=> None/null
// console.log(blast(board2, 2)) //=> (0, 3), (3, 2) or (1, 2), (3, 2)
// console.log(blast(board3, 2)) //=> None/null
// console.log(blast(board3, 3)) //=> (2, 2)
// console.log(blast(board4, 3)) //=> (1, 1) or (2, 2)

