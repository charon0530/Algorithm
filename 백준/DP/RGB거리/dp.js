var fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(list) {
    const N = Number(input[0]);
    //dp[i번째 집][j색] => 최소 비용
    const dp = Array.from({ length: N }, () => new Array(3).fill(0));
    //0 : R 1 :G 2 :B
    const [iR, iG, iB] = input[1].split(" ").map((x) => Number(x));
    dp[0][0] = iR;
    dp[0][1] = iG;
    dp[0][2] = iB;

    for (let i = 1; i < N; i++) {
        const [cR, cG, cB] = input[i + 1].split(" ").map((x) => Number(x));
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cR;
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cG;
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cB;
    }
    return Math.min(...dp[N - 1]);
}

console.log(solution(input));
