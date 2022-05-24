var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
//a = 18;

function solution(N) {
    const dp = new Array(N + 1).fill(5000);

    dp[0] = 0;

    for (let i = 1; i <= N; i++) {
        if (i - 3 >= 0) {
            dp[i] = Math.min(dp[i], dp[i - 3] + 1);
        }
        if (i - 5 >= 0) {
            dp[i] = Math.min(dp[i], dp[i - 5] + 1);
        }
    }
    return dp[N];
}

console.log(solution(a) === 5000 ? -1 : solution(a));
