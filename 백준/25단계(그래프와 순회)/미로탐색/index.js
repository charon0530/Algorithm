var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const board = new Array(N);
    for (let i = 1; i <= N; i++) {
        board[i - 1] = input[i].split("").map(Number);
    }
    //console.table(board);

    const ch = Array.from({ length: N }, () => new Array(M).fill(0));
    const queue = [];

    ch[0][0] = 1;
    queue.push([0, 0, 1]);
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    while (queue.length) {
        const [curR, curC, times] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nR = curR + dr[i];
            const nC = curC + dc[i];

            if (nR < 0 || nR >= N || nC < 0 || nC >= M) continue;
            if (board[nR][nC] === 0) continue;
            if (ch[nR][nC] === 1) continue;

            if (nR === N - 1 && nC === M - 1) {
                console.log(times + 1);
                return;
            }
            ch[nR][nC] = 1;
            queue.push([nR, nC, times + 1]);
        }
    }
}

solution(param);
