/**
 You are creating Flippy, an AI that plans to take over the world by solving games having to do with flipping things.
  First the AI must master a one-dimensional game called Reversi.

There are two players, denoted by 'X' (the AI player) and 'O'.
The goal is to place a new 'X' in a blank space on the board to capture the 'O' tokens 
between two 'X' tokens (with no spaces in between). 
A move can capture to the left or the right, not both, of the newly placed 'X'.

The valid moves in this example are 4, 5, and 13 (the blank spaces):
   0    1    2    3    4    5    6    7    8    9   10   11   12   13
[ 'X', 'O', 'O', 'O', ' ', ' ', 'O', 'O', 'X', 'O', 'X', 'X', 'O', ' ' ]
* Move at 13 (flips 12)                                       <--- 'X' 
* A move at 4 <------ 'X' (flips 1, 2 and 3)      
* Move at 5                 'X' --------->  (flips 6 and 7)

The optimal move captures as many 'O' as possible. In this case, that move is 4, which captures three tokens).

Write a function that, given a board, returns the optimal move for 'X', together with how many tokens are captured.

*/

function capture(board) {
  let end = 0, previous = 0;
  let returnVal = { position: 0, count: 0 };
  let ifPreviousEmpty = false;
  while (end <= board.length) {
    if (board[end] === "X") {
      if (!ifPreviousEmpty) {
        previous = end;
      }
      else {
        if (returnVal.count < end - previous) {
          returnVal = { position: previous, count: end - previous - 1 };
        }
        ifPreviousEmpty = false;
        previous = end;
      }
    } else if (board[end] === " ") {
      if (ifPreviousEmpty) {
        previous = end;
      } else {
        if (returnVal.count < end - previous) {
          returnVal = { position: end, count: end - previous - 1 };
        }
        ifPreviousEmpty = true;
        previous = end;
      }

    }
    end += 1

  }
  if (returnVal.count === 0) return 'None / null';
  return `${returnVal.position},${returnVal.count}`;
}

let board1 = [
  'X',
  'O',
  'O',
  'O',
  ' ',
  ' ',
  'O',
  'O',
  'X',
  'O',
  'X',
  'X',
  'O',
  ' ',
]; //=> 4, 3 ==PASS
let board2 = ['X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'X', 'O', 'O', ' ']; //=> 12, 2
let board3 = [' ', 'O', 'X']; //=> 0, 1
let board4 = ['X', 'O']; //=> None / null ==PASS
let board5 = ['X', 'O', ' ']; //=> 2, 1 ==PASS
let board6 = ['X', 'O', ' ', 'O', 'O', 'X', 'O', ' ', ' ']; //=> 2, 2
let board7 = ['X', 'O', 'O', ' ', 'O', 'O', 'O']; //=> 3, 2 ==PASS
let board8 = ['O', 'O', ' ', 'X']; //=> None / null ==PASS
let board9 = ['X', 'O', ' ', 'X', 'O', ' ', 'O', 'X']; //=> 2, 1 or 5, 1 ==PASS
let board10 = ['X', 'O', 'X', ' ']; // => None / null ==PASS

console.log('board1 ', capture(board1) === '4,3'); //=> 4, 3
console.log('board2 ', capture(board2) === '12,2'); //=> 12, 2
console.log('board3 ', capture(board3) === '0,1'); //=> 0, 1
console.log('board4 ', capture(board4) === 'None / null'); //=> None / null
console.log('board5 ', capture(board5) === '2,1'); //=> 2, 1
console.log('board6 ', capture(board6) === '2,2'); //=> 2, 2
console.log('board7 ', capture(board7) === '3,2'); //=> 3, 2
console.log('board4 ', capture(board4) === 'None / null'); //=> None / null
console.log('board9 ', capture(board9) === '5,1'); //=> 2, 1 or 5, 1
console.log('board10 ', capture(board10) === 'None / null'); // => None / null
