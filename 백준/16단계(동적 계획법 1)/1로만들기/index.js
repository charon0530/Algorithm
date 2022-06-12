var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const dp = new Array(N + 1).fill(1000001);
    dp[1] = 0;
    for (let i = 1; i <= N; i++) {
        if (i * 2 <= N) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        if (i * 3 <= N) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
        if (i + 1 <= N) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
        }
    }
    console.log(dp);
}

solution(param);
