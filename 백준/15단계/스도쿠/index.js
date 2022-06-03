var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const board = new Array(9);
    for (let i = 0; i < 9; i++) {
        board[i] = input[i].split(" ").map((x) => Number(x));
    }
    const blankList = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) blankList.push([i, j]);
        }
    }

    function isOK(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
            if (board[i][col] === num) return false;
        }
        const offsetRow = parseInt(row / 3) * 3;
        const offsetCol = parseInt(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[offsetRow + i][offsetCol + j] === num) return false;
            }
        }
        return true;
    }
    let flag = false;
    function DFS(blankListIdx) {
        if (flag) return;
        if (blankListIdx === blankList.length) {
            //console.table(board);
            const boardStr = board.map((x) => x.join(" "));
            console.log(boardStr.join("\n"));
            flag = true;
            return;
        } else {
            const [cr, cc] = blankList[blankListIdx];
            for (let i = 1; i <= 9; i++) {
                if (isOK(board, cr, cc, i)) {
                    board[cr][cc] = i;
                    DFS(blankListIdx + 1);
                    board[cr][cc] = 0;
                }
            }
        }
    }
    DFS(0);
}

solution(param);
