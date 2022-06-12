var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const dp = new Array(N + 1).fill(1000001);
    dp[1] = 0;
    for (let i = 2; i <= N; i++) {
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
        if (i - 1 >= 1) {
            dp[i] = Math.min(dp[i], dp[i - 1] + 1);
        }
    }
    console.log(dp);
}

solution(param);
