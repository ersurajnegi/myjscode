const board = [
    ['A', 'S', 'C', 'D', 'F'],
    ['A', 'U', 'R', 'D', 'F'],
    ['A', 'Z', 'A', 'J', 'F'],
    ['A', 'B', 'C', 'D', 'F'],
    ['A', 'B', 'C', 'D', 'F'],
];
const word = 'SURAJ';
//arra to keep track where we found the word
var foundArray = [];

var exist = function (board, word) {
    var rowLength = board.length;
    var columnLength = (board[0] || []).length;
    var len3 = word.length;
    var visited = null;

    if (!rowLength || !columnLength || !len3) return false;

    function helper(board, word, row, column, k, visited) {
        if (k === word.length) return true;
        if (row < 0 || row >= board.length) return false;
        if (column < 0 || column >= board[row].length) return false;
        if (visited[row][column]) return false;
        if (board[row][column] !== word[k]) return false;

        var res = false;

        visited[row][column] = true;
        foundArray.push([row, column])

        res = helper(board, word, row - 1, column, k + 1, visited)
            || helper(board, word, row + 1, column, k + 1, visited)
            || helper(board, word, row, column - 1, k + 1, visited)
            || helper(board, word, row, column + 1, k + 1, visited);

        if (!res) visited[row][column] = false;

        return res;
    };

    for (var i = 0; i < rowLength; i++) {
        for (var j = 0; j < columnLength; j++) {
            visited = Array(rowLength).fill(0).map(_ => Array(columnLength));
            if (helper(board, word, i, j, 0, visited)) return true;
        }
    }

    return false;
};

console.log(exist(board, word));
console.log(foundArray)