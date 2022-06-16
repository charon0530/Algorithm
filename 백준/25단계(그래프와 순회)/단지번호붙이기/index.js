var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const num = Number(input[0]);
    const board = new Array(num);
    for (let i = 1; i <= num; i++) {
        board[i - 1] = input[i].split("").map(Number);
    }
    console.table(board);
    let dNum = 2;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    let count = 0;
    function DFS(curR, curC) {
        for (let i = 0; i < 4; i++) {
            const nR = curR + dr[i];
            const nC = curC + dc[i];

            if (nR < 0 || nR >= num || nC < 0 || nC >= num) continue;
            if (board[nR][nC] === 0) continue;

            board[nR][nC] = 0;
            count++;
            DFS(nR, nC);
        }
    }
    let answer = [];
    for (let row = 0; row < num; row++) {
        for (let col = 0; col < num; col++) {
            if (board[row][col] === 0) continue;
            count = 1;
            board[row][col] = 0;
            DFS(row, col);
            console.table(board);
            answer.push(count);
        }
    }
    answer.sort((a, b) => a - b);
    let str = "";
    str += answer.length + "\n";

    for (let val of answer) {
        str += val + "\n";
    }
    console.log(str);
}

solution(param);
