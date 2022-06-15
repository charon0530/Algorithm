var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const count = Number(input[0]);
    let lineIdx = 1;
    let str = "";
    const dp = Array.from({ length: count + 1 }, () => new Array(count + 1));
    for (let i = 1; i <= count; i++) {
        const [N, M] = input[lineIdx++].split(" ").map(Number);
        dp[i][i] = [0, N, M];
    }
    for (let len = 2; len <= count; len++) {
        for (let s = 1; s <= count - len + 1; s++) {
            let min = Number.MAX_SAFE_INTEGER;
            for (let k = 0; k <= len - 2; k++) {
                let calcNum =
                    dp[s][s + k][0] +
                    dp[s + k + 1][s + len - 1][0] +
                    dp[s][s + k][1] *
                        dp[s][s + k][2] *
                        dp[s + k + 1][s + len - 1][2];
                if (min > calcNum) {
                    min = calcNum;
                    dp[s][s + len - 1] = [
                        calcNum,
                        dp[s][s + k][1],
                        dp[s + k + 1][s + len - 1][2],
                    ];
                }
            }
        }
    }

    console.log(dp[1][count][0]);
}

solution(param);
