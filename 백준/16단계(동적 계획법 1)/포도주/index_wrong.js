var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let answer = 0;
    const numList = [];
    for (let i = 1; i <= N; i++) {
        numList.push(Number(input[i]));
    }

    if (N === 1) return numList[0];
    if (N === 2) return numList[0] + numList[1];
    //dp[n번째잔][바로직전잔여부]
    const dp = Array.from({ length: N }, () => new Array(2).fill(0));
    dp[0][0] = numList[0];
    dp[0][1] = numList[0];

    dp[1][0] = numList[1];
    dp[1][1] = numList[0] + numList[1];

    for (let i = 2; i < N; i++) {
        dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + numList[i];
        dp[i][1] = dp[i - 1][0] + numList[i];
        answer = Math.max(answer, dp[i][0]);
        answer = Math.max(answer, dp[i][1]);
    }

    console.log(answer);
}

solution(param);
