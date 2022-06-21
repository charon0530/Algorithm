var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const dp = new Array(N + 1).fill(1000001);
    const parent = new Array(N + 1);
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i;
    }
    dp[1] = 0;
    for (let i = 2; i <= N; i++) {
        if (i % 3 === 0) {
            if (dp[i / 3] + 1 < dp[i]) {
                dp[i] = dp[i / 3] + 1;
                parent[i] = i / 3;
            }
        }
        if (i % 2 === 0) {
            if (dp[i / 2] + 1 < dp[i]) {
                dp[i] = dp[i / 2] + 1;
                parent[i] = i / 2;
            }
        }
        if (dp[i - 1] + 1 < dp[i]) {
            dp[i] = dp[i - 1] + 1;
            parent[i] = i - 1;
        }
    }
    let str = "";
    let num = N;
    while (true) {
        if (num === 1) break;
        str += num + " ";
        num = parent[num];
    }
    str += "1";

    console.log(dp[N]);
    console.log(str);
}

solution(param);
