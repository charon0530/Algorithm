var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const board = new Array(N);
    for (let i = 1; i <= N; i++) {
        board[i - 1] = input[i].split(" ").map(Number);
    }
    console.table(board);
    let wCount = 0;
    let bCount = 0;
    function DFS(sr, sc, er, ec) {
        const boardList = [];
        for (let i = sr; i <= er; i++) {
            for (let j = sc; j <= ec; j++) {
                boardList.push(board[i][j]);
            }
        }
        if (boardList.every((x) => x === boardList[0])) {
            if (boardList[0] === 0) {
                wCount += 1;
            } else {
                bCount += 1;
            }
        } else {
            let mr = parseInt((sr + er) / 2);
            let mc = parseInt((sc + ec) / 2);
            DFS(sr, sc, mr, mc);
            DFS(sr, mc + 1, mr, ec);
            DFS(mr + 1, sc, er, mc);
            DFS(mr + 1, mc + 1, er, ec);
        }
    }
    DFS(0, 0, N - 1, N - 1);
    console.log(wCount);
    console.log(bCount);
}

solution(param);
