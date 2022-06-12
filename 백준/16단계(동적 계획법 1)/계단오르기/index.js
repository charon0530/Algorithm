var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    if (N === 1) {
        console.log(Number(input[1]));
        return;
    }
    const numList = [];
    for (let i = 1; i <= N; i++) {
        numList.push(Number(input[i]));
    }
    //console.log(numList);
    const dp = Array.from({ length: numList.length }, () =>
        new Array(2).fill(0)
    );
    //dp[0][0] 0층을 연속하지 않고
    //dp[0][1] 0층을 연속해서
    dp[0][0] = numList[0];
    dp[1][0] = numList[1];
    dp[1][1] = numList[0] + numList[1];
    for (let i = 2; i < numList.length; i++) {
        dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + numList[i];
        dp[i][1] = dp[i - 1][0] + numList[i];
    }
    console.log(Math.max(...dp[dp.length - 1]));
}

solution(param);
