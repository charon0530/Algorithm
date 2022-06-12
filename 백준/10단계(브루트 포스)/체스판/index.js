var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [M, N] = input[0].split(" ").map((x) => Number(x));
    let answer = Number.MAX_SAFE_INTEGER;
    const board = new Array(M).fill(null);
    for (let i = 1; i <= M; i++) {
        board[i - 1] = input[i].split("");
    }

    const startW =
        "WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW";
    const startB =
        "BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB";
    for (let offsetRow = 0; offsetRow <= M - 8; offsetRow++) {
        for (let offsetCol = 0; offsetCol <= N - 8; offsetCol++) {
            let str = "";
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    str += board[offsetRow + i][offsetCol + j];
                }
            }
            let startWCount = 0;
            let startBCount = 0;
            for (let i = 0; i < str.length; i++) {
                if (startW[i] !== str[i]) startWCount++;
                if (startB[i] !== str[i]) startBCount++;
            }
            answer = Math.min(answer, startWCount, startBCount);
        }
    }
    return answer;
}

console.log(solution(param));
