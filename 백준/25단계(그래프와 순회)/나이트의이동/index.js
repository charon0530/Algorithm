var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const testNum = Number(input[0]);
    let lineNum = 1;
    let str = "";
    outer: for (let i = 0; i < testNum; i++) {
        const boardLen = Number(input[lineNum++]);
        const [curR, curC] = input[lineNum++].split(" ").map(Number);
        const [endR, endC] = input[lineNum++].split(" ").map(Number);
        if (curR === endR && curC === endC) {
            str += "0\n";
            continue;
        }

        const dr = [-2, -1, 1, 2, 2, 1, -1, -2];
        const dc = [1, 2, 2, 1, -1, -2, -2, -1];

        const board = Array.from({ length: boardLen }, () =>
            new Array(boardLen).fill(0)
        );
        const queue = [];
        board[curR][curC] = 1;
        queue.push([curR, curC, 0]);
        let queueIdx = 0;
        while (queueIdx < queue.length) {
            const [cR, cC, times] = queue[queueIdx++];
            //console.table(board);
            for (let i = 0; i < 8; i++) {
                const nR = cR + dr[i];
                const nC = cC + dc[i];
                if (nR < 0 || nR >= boardLen || nC < 0 || nC >= boardLen)
                    continue;
                if (board[nR][nC] === 1) continue;

                if (nR === endR && nC === endC) {
                    str += times + 1 + "\n";
                    continue outer;
                }
                board[nR][nC] = 1;
                queue.push([nR, nC, times + 1]);
            }
        }
    }
    console.log(str);
}

solution(param);
