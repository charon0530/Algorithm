var fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(list) {
    const [N, K] = list[0].split(" ").map((x) => Number(x));
    const dp = new Array(K + 1).fill(0);

    for (let i = 0; i <= K; i++) {
        for (let j = 1; j <= N; j++) {
            const [W, V] = list[j].split(" ").map((x) => Number(x));

            if (i - W >= 0) {
                dp[i] = Math.max(dp[i], dp[i - W] + V);
            }
        }
    }
    console.table(dp);
    return dp[K];
}

console.log(solution(input));
