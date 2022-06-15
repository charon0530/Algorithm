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
    const stack = [[0, 0, ch, [[0, 0]]]];

    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    while (stack.length) {
        const [curR, curC, curCh, curPath] = stack.pop();

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
            if (curCh[nextR][nextC] === 1) continue;

            if (nextR === board.length - 1 && nextC === board[0].length - 1) {
                answer++;
                //console.log(curPath);
                continue;
            }

            const copyCh = curCh.map((line) => line.slice());
            const copyPath = [...curPath];
            copyPath.push([nextR, nextC]);
            copyCh[nextR][nextC] = 1;
            stack.push([nextR, nextC, copyCh, copyPath]);
        }
    }
    console.log(answer);
}

solution(param);
