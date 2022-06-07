var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = new Array(N);
    for (let i = 1; i <= N; i++) {
        const line = input[i].split(" ").map(Number);
        numList[i - 1] = line;
    }
    console.log(numList);
    let count = 0;
    const dp = Array.from({ length: N }, () => new Array(N).fill(0));
    dp[0][0] = numList[0][0];
    for (let i = 1; i < N; i++) {
        for (let j = 0; j <= i; j++) {
            count++;
            const l = j - 1 >= 0 ? dp[i - 1][j - 1] : 0;
            const r = dp[i - 1][j];
            dp[i][j] = Math.max(l, r) + numList[i][j];
        }
    }
    console.log(count);
    console.log(Math.max(...dp[N - 1]));
}

solution(param);
