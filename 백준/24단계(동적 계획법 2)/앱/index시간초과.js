var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const sizeList = input[1].split(" ").map(Number);
    const costList = input[2].split(" ").map(Number);
    const dp = Array.from({ length: N + 1 }, () =>
        new Array(M + 1).fill(Number.MAX_SAFE_INTEGER)
    );
    dp[0][0] = 0;

    for (let i = 0; i < N; i++) {
        const curSize = sizeList[i];
        const curCost = costList[i];
        for (let j = 0; j <= curSize; j++) {
            dp[i + 1][j] = Math.min(dp[i][j], curCost);
        }
        for (let j = curSize + 1; j <= M; j++) {
            if (dp[i][j - curSize] !== Number.MAX_SAFE_INTEGER)
                dp[i + 1][j] = Math.min(dp[i][j - curSize] + curCost, dp[i][j]);
        }
    }
    console.log(dp[N][M]);
}

solution(param);
