var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let [N, K] = input[0].split(" ").map(Number);

    let up = 1n;
    let down = 1n;
    for (let i = 0; i < K; i++) {
        up *= BigInt(N);
        N = BigInt(N) - 1n;
    }
    for (let i = K; i >= 1; i--) {
        down *= BigInt(i);
    }
    let result = (up / down) % 10007n;
    console.log(Number(result));
}

solution(param);
