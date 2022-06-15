var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const dp = Array.from({ length: N }, () => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        dp[i][i] = 1;
    }
    for (let i = 0; i < N - 1; i++) {
        if (numList[i] === numList[i + 1]) dp[i][i + 1] = 1;
    }
    for (let len = 3; len <= numList.length; len++) {
        for (let i = 0; i < N - len + 1; i++) {
            if (numList[i] === numList[i + len - 1]) {
                if (dp[i + 1][i + len - 1 - 1] === 1) dp[i][i + len - 1] = 1;
            }
        }
    }
    let str = "";
    const M = Number(input[2]);
    for (let i = 3; i < 3 + M; i++) {
        let [S, E] = input[i].split(" ").map(Number);
        str += dp[S - 1][E - 1] + "\n";
    }
    console.log(str);
}

solution(param);
