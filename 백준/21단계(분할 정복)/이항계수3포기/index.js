var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const board = new Array(N);
    for (let i = 1; i <= N; i++) {
        board[i - 1] = input[i].split("").map(Number);
    }
    //console.table(board);

    function DFS(sr, sc, er, ec) {
        const boardList = [];
        for (let i = sr; i <= er; i++) {
            for (let j = sc; j <= ec; j++) {
                boardList.push(board[i][j]);
            }
        }
        if (boardList.every((x) => x === boardList[0])) {
            return boardList[0];
        } else {
            const mr = parseInt((sr + er) / 2);
            const mc = parseInt((sc + ec) / 2);
            const lt = DFS(sr, sc, mr, mc);
            const rt = DFS(sr, mc + 1, mr, ec);
            const lb = DFS(mr + 1, sc, er, mc);
            const rb = DFS(mr + 1, mc + 1, er, ec);

            return "(" + lt + rt + lb + rb + ")";
        }
    }
    console.log(DFS(0, 0, N - 1, N - 1));
}

solution(param);
