var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const sizeList = input[1].split(" ").map(Number);
    const costList = input[2].split(" ").map(Number);
    const dp = new Array(M + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i < N; i++) {
        const curSize = sizeList[i];
        const curCost = costList[i];

        for (let j = M; j >= curSize + 1; j--) {
            if (dp[j - curSize] !== Number.MAX_SAFE_INTEGER)
                dp[j] = Math.min(dp[j], dp[j - curSize] + curCost);
        }
        for (let j = curSize; j >= 0; j--) {
            dp[j] = Math.min(dp[j], curCost);
        }
    }
    console.log(dp[M]);
}

solution(param);
