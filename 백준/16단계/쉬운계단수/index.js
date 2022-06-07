var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);

    //dp[자리수][끝수] = 계단개수
    const dp = Array.from({ length: N + 1 }, () => new Array(10).fill(0));
    for (let i = 1; i < 10; i++) {
        dp[1][i] = 1;
    }
    for (let i = 2; i <= N; i++) {
        for (let j = 0; j < 10; j++) {
            if (j + 1 === 10) {
                dp[i][j] = dp[i - 1][j - 1] % 1000000000;
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j + 1] % 1000000000;
            } else {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
            }
        }
    }
    //console.table(dp);
    console.log(dp[N].reduce((acc, val) => acc + val, 0) % 1000000000);
}

solution(param);
