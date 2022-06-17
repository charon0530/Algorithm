var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [M, N] = input[0].split(" ").map(Number);
    const board = new Array(N);
    for (let i = 1; i <= N; i++) {
        board[i - 1] = input[i].split(" ").map(Number);
    }
    console.table(board);
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    const ch = Array.from({ length: N }, () => new Array(M).fill(0));
    const queue = [];
    let count = 0;
    let targetCount = N * M;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 1) {
                ch[i][j] = 1;
                queue.push([i, j, 0]);
                count++;
            } else if (board[i][j] === -1) {
                targetCount--;
            }
        }
    }
    if (count === targetCount) {
        console.log(0);
        return;
    }
    let shiftIdx = 0;
    while (shiftIdx < queue.length) {
        const [curR, curC, days] = queue[shiftIdx++];

        for (let i = 0; i < 4; i++) {
            const nR = curR + dr[i];
            const nC = curC + dc[i];

            if (nR < 0 || nR >= N || nC < 0 || nC >= M) continue;
            if (board[nR][nC] === -1) continue;
            if (ch[nR][nC] === 1) continue;

            count++;
            if (count === targetCount) {
                console.log(days + 1);
                return;
            }
            ch[nR][nC] = 1;
            queue.push([nR, nC, days + 1]);
        }
    }

    console.log(-1);
}

solution(param);
