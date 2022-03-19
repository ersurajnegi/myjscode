/**
 QUESTION 1 : there is an image filled with 0s and 1s. There is at most one rectangle in this image filled with 0s, 
 find the rectangle. Output could be the coordinates of top-left and bottom-right elements of the rectangle, or top-left element, width and height.


 */

function findOneRectangle(board) {
    if (!board || board.length === 0 || board[0].length === 0) {
        return [];
    }
    const result = [];
    //loop over row and column
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            //check for zero
            if (board[i][j] === 0) {
                //push the first/min cordinates where zero found
                result.push([i, j]);
                let height = 1, width = 1;
                //loop from first x coordinate till zero found in x -axis
                while (i + height < board.length && board[i + height][j] === 0) {
                    height++;
                }
                //loop from first y coordinate till zero found in y -axis
                while (j + width < board[0].length && board[i][j + width] === 0) {
                    width++;
                }
                //push the max-coordinates where the last 0 found in x and y
                result.push([i + height - 1, j + width - 1, height, width]);
                break;
            }
            if (result.length !== 0) {
                break;
            }
        }
    }
    return result;
}


/**
 QUESTION : for the same image, it is filled with 0s and 1s. 
 It may have multiple rectangles filled with 0s. 
 The rectangles are separated by 1s. Find all the rectangles.

 */
function findMultipleRectangle(board) {
    if (!board || board.length === 0 || board[0].length === 0) {
        return [];
    }
    const result = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0) {
                const rectangle = [[i, j]];
                board[i][j] = 1;
                let height = 1, width = 1;
                while (i + height < board.length && board[i + height][j] === 0) {
                    height++;
                }
                while (j + width < board[0].length && board[i][j + width] === 0) {
                    width++;
                }
                for (let h = 0; h < height; h++) {
                    for (let w = 0; w < width; w++) {
                        board[i + h][j + w] = 1;
                    }
                }
                rectangle.push([i + height - 1, j + width - 1]);
                result.push(rectangle);
            }
        }
    }
    return result;
}


/**
 QUESTIION 3:
 the image has random shapes filled with 0s, separated by 1s. Find all the shapes. Each shape is represented by coordinates of all the elements inside.

 */

function findMultipleShapes(board) {
    if (!board || board.length === 0 || board[0].length === 0) {
        return [];
    }
    const result = [];
    const floodFillDFS = (x, y, shape) => {
        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] === 1) {
            return;
        }
        board[x][y] = 1;
        shape.push([x, y]);
        floodFillDFS(x + 1, y, shape);
        floodFillDFS(x - 1, y, shape);
        floodFillDFS(x, y - 1, shape);
        floodFillDFS(x, y + 1, shape);
    };
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0) {
                shape = [];
                floodFillDFS(i, j, shape);
                result.push(shape);
            }
        }
    }
    return result;
}