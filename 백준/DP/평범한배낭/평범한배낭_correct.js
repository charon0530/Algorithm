var fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(list) {
    const [N, K] = list[0].split(" ").map((x) => Number(x));
    const dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        const [W, V] = list[i].split(" ").map((x) => Number(x));
        for (let j = 0; j <= K; j++) {
            if (j - W >= 0) {
                dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[N][K];
}

console.log(solution(input));
