var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const board = new Array(N);
    for (let i = 0; i < N; i++) {
        board[i] = input[i + 1].split(" ").map(Number);
    }
    //console.table(board);

    const ch = Array.from({ length: board.length }, () =>
        new Array(board[0].length).fill(0)
    );
    let answer = 0;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    const dp = Array.from({ length: board.length }, () =>
        new Array(board[0].length).fill(-1)
    );
    function DFS(curR, curC) {
        if (dp[curR][curC] !== -1) return dp[curR][curC];
        if (curR === board.length - 1 && curC === board[0].length - 1) {
            //answer++;
            //console.log(curPath);
            return 1;
        } else {
            let childSum = 0;
            for (let i = 0; i < 4; i++) {
                const nextR = curR + dr[i];
                const nextC = curC + dc[i];
                if (
                    nextR < 0 ||
                    nextR >= board.length ||
                    nextC < 0 ||
                    nextC >= board[0].length
                )
                    continue;
                if (board[nextR][nextC] >= board[curR][curC]) continue;
                if (ch[nextR][nextC] === 1) continue;
                ch[nextR][nextC] = 1;
                childSum += DFS(nextR, nextC);
                ch[nextR][nextC] = 0;
            }
            dp[curR][curC] = Math.max(childSum, 0);
            return dp[curR][curC];
        }
    }
    ch[0][0] = 1;
    answer = DFS(0, 0);
    //console.table(dp);

    console.log(answer);
}

solution(param);
