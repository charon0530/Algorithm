var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const dp = new Array(N).fill(0);
    dp[0] = numList[0];
    for (let i = 1; i < N; i++) {
        if (dp[i - 1] < 0) {
            dp[i] = numList[i];
        } else {
            dp[i] = dp[i - 1] + numList[i];
        }
    }
    console.log(Math.max(...dp));
}

solution(param);
