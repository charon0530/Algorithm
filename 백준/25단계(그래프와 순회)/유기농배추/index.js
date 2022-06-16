var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const tNum = Number(input[0]);
    let lineNum = 1;
    for (let i = 0; i < tNum; i++) {
        let answer = 0;
        const [colLen, rowLen, K] = input[lineNum++].split(" ").map(Number);
        const board = Array.from({ length: rowLen }, () =>
            new Array(colLen).fill(0)
        );

        for (let j = 0; j < K; j++) {
            const [col, row] = input[lineNum++].split(" ").map(Number);
            board[row][col] = 1;
        }

        console.table(board);
        const dr = [-1, 0, 1, 0];
        const dc = [0, 1, 0, -1];
        function DFS(curR, curC) {
            for (let i = 0; i < 4; i++) {
                const nR = curR + dr[i];
                const nC = curC + dc[i];

                if (nR < 0 || nR >= rowLen || nC < 0 || nC >= colLen) continue;
                if (board[nR][nC] === 0) continue;

                board[nR][nC] = 0;
                DFS(nR, nC);
            }
        }

        for (let r = 0; r < rowLen; r++) {
            for (let c = 0; c < colLen; c++) {
                if (board[r][c] === 0) continue;

                answer++;
                board[r][c] = 0;
                DFS(r, c);
            }
        }
        console.log(answer);
    }
}

solution(param);
