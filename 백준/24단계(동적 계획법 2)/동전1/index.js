var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    const dp = new Array(K + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= N; i++) {
        const curCoin = Number(input[i]);
        for (let j = 1; j <= K; j++) {
            if (j - curCoin >= 0) dp[j] = dp[j - curCoin] + dp[j];
        }
    }
    //console.table(dp);
    console.log(dp[K]);
}

solution(param);
