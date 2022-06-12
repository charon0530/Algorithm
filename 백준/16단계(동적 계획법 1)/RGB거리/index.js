var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const dp = Array.from({ length: N }, () => new Array(3).fill(0));
    const firstLine = input[1].split(" ").map(Number);
    dp[0][0] = firstLine[0];
    dp[0][1] = firstLine[1];
    dp[0][2] = firstLine[2];
    for (let i = 1; i < N; i++) {
        const [R, G, B] = input[i + 1].split(" ").map(Number);

        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + R;
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + G;
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + B;
    }
    console.log(Math.min(...dp[N - 1]));
}

solution(param);
