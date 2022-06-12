var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const dp = new Array(101).fill(-1);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;
    let lineNum = 1;
    str = "";
    for (let j = 0; j < N; j++) {
        const num = Number(input[lineNum++]);
        for (let i = 6; i <= num; i++) {
            if (dp[i] !== -1) continue;
            dp[i] = dp[i - 1] + dp[i - 5];
        }
        str += String(dp[num]) + "\n";
    }
    console.log(str);
}

solution(param);
