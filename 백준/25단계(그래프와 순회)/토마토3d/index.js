var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [M, N, H] = input[0].split(" ").map(Number);
    const board = Array.from({ length: H }, () => new Array(N));
    let lineNum = 1;
    for (let z = 0; z < H; z++) {
        for (let r = 0; r < N; r++) {
            board[z][r] = input[lineNum++].split(" ").map(Number);
        }
    }
    console.log(board);
    const dz = [0, 0, 0, 0, 1, -1];
    const dr = [-1, 0, 1, 0, 0, 0];
    const dc = [0, 1, 0, -1, 0, 0];

    const ch = board.map((d2) => d2.map((line) => line.slice().fill(0)));
    const queue = [];
    let count = 0;
    let targetCount = N * M * H;

    for (let k = 0; k < H; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (board[k][i][j] === 1) {
                    ch[k][i][j] = 1;
                    queue.push([k, i, j, 0]);
                    count++;
                } else if (board[k][i][j] === -1) {
                    targetCount--;
                }
            }
        }
    }

    if (count === targetCount) {
        console.log(0);
        return;
    }
    let shiftIdx = 0;
    while (shiftIdx < queue.length) {
        const [curZ, curR, curC, days] = queue[shiftIdx++];

        for (let i = 0; i < 6; i++) {
            const nZ = curZ + dz[i];
            const nR = curR + dr[i];
            const nC = curC + dc[i];

            if (nR < 0 || nR >= N || nC < 0 || nC >= M || nZ < 0 || nZ >= H)
                continue;
            if (board[nZ][nR][nC] === -1) continue;
            if (ch[nZ][nR][nC] === 1) continue;

            count++;
            if (count === targetCount) {
                console.log(days + 1);
                return;
            }
            ch[nZ][nR][nC] = 1;
            queue.push([nZ, nR, nC, days + 1]);
        }
    }

    console.log(-1);
}

solution(param);
