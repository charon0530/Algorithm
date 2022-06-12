var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let lineIdx = 0;
    const [N, M] = input[lineIdx++].split(" ").map(Number);
    const A = new Array(N);
    for (let i = 0; i < N; i++) {
        A[i] = input[lineIdx++].split(" ").map(Number);
    }
    const [L, K] = input[lineIdx++].split(" ").map(Number);
    const B = new Array(M);
    for (let i = 0; i < L; i++) {
        B[i] = input[lineIdx++].split(" ").map(Number);
    }

    const result = Array.from({ length: N }, () => new Array(K).fill(0));
    for (let i = 0; i < N; i++) {
        for (let k = 0; k < K; k++) {
            for (let j = 0; j < M; j++) {
                result[i][k] += A[i][j] * B[j][k];
            }
        }
    }

    let str = "";
    for (let line of result) {
        str += line.join(" ") + "\n";
    }
    console.log(str);
}

solution(param);
