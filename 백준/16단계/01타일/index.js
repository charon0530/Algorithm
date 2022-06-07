var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const dp = new Array(1000001).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    //dp[3] = dp[2]+1
    //dp[4] = dp[2] + 2
    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
    }
    console.log(dp[N]);
}

solution(param);
